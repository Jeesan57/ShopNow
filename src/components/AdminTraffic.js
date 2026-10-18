'use client';
import { useEffect, useState } from 'react';
import { FiRefreshCw, FiUsers, FiEye, FiActivity, FiArrowUpRight, FiGlobe, FiMonitor, FiLink, FiBarChart2 } from 'react-icons/fi';
import { getSupabase } from '../lib/supabase';

const count = value => Number(value || 0).toLocaleString();
const deviceColors = ['#956514', '#c3a56e', '#e3d5b9', '#89795c', '#b7ac98'];
const label = value => value === '(not set)' ? 'Not recorded' : value;
function TrafficSetup({ missing = [], email }) {
  return <section className="traffic-setup dashboard-card">
    <span className="traffic-setup-icon"><FiLink aria-hidden="true"/></span><h2>Connect your traffic reports</h2><p>Your website’s tracking ID sends events to Google. Reading those reports in Admin needs a separate reporting connection.</p>
    <ol><li><strong>Find your numeric Property ID</strong><span>Google Analytics → Admin → Property details. It is different from G-S832ZPVY7K and the Stream ID.</span></li><li><strong>Create a Google service account</strong><span>In Google Cloud, enable the Google Analytics Data API and create a service account for reporting.</span></li><li><strong>Give it read-only access</strong><span>Add the service account email in Analytics → Admin → Property access management with the Viewer role.</span>{email && <code>{email}</code>}</li><li><strong>Add the credentials to your server</strong><span>Configure the Property ID, service account email, and private key in your hosting environment, then redeploy. Keep the private key out of chat and browser code.</span></li></ol>
    {missing.length > 0 && <div className="traffic-missing"><strong>Still needed</strong><span>{missing.join(' · ')}</span></div>}
    <div className="traffic-setup-actions"><a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">Open Google Analytics<FiArrowUpRight aria-hidden="true"/></a><a href="https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart" target="_blank" rel="noopener noreferrer">Google’s reporting setup guide<FiArrowUpRight aria-hidden="true"/></a></div>
  </section>;
}
function TrafficTrend({ rows, measure, onMeasure }) {
  const [active, setActive] = useState(null);
  const maximum = Math.max(4, ...rows.map(row => row[measure]));
  const selected = rows.find(row => row.date === active);
  return <section className="dashboard-card traffic-trend"><header className="dashboard-card-heading"><div><h2>Traffic over time</h2><p>Daily {measure === 'activeUsers' ? 'active visitors' : 'page views'}</p></div><div className="dashboard-chart-switch" role="group" aria-label="Traffic chart metric"><button type="button" aria-pressed={measure === 'activeUsers'} onClick={()=>onMeasure('activeUsers')}>Visitors</button><button type="button" aria-pressed={measure === 'views'} onClick={()=>onMeasure('views')}>Page views</button></div></header><p className="traffic-chart-value" aria-live="polite">{selected ? `${selected.date}: ${count(selected[measure])}` : 'Hover or focus a day to inspect its count.'}</p>
    <div className="dashboard-plot"><div className="dashboard-chart-grid" aria-hidden="true">{[4,3,2,1,0].map(step=><div key={step}><span>{Math.round(maximum*step/4)}</span><i/></div>)}</div><div className="dashboard-bars daily" style={{gridTemplateColumns:`repeat(${rows.length},minmax(0,1fr))`}}>{rows.map((row,index)=><div className="dashboard-bar-column" key={row.date}><button type="button" aria-label={`${row.date}: ${count(row[measure])} ${measure === 'views' ? 'page views' : 'active visitors'}`} onMouseEnter={()=>setActive(row.date)} onMouseLeave={()=>setActive(null)} onFocus={()=>setActive(row.date)} onBlur={()=>setActive(null)} onClick={()=>setActive(row.date)}><span style={{height:`${Math.max(.8,row[measure]/maximum*100)}%`,opacity:row[measure]?1:.15}}/></button><span className="dashboard-bar-label">{index===0 || index===rows.length-1 || (rows.length<=7) || (index%Math.ceil(rows.length/5)===0&&index<rows.length-3) ? row.date.slice(5).replace('-','/') : ''}</span></div>)}</div></div>
    <p className="dashboard-card-footnote">Daily visitors can appear on more than one day. The summary shows unique active visitors across the full period.</p>
  </section>;
}
function ReportTable({ title, subtitle, columns, rows, empty }) {
  return <section className="dashboard-card traffic-report-table"><header className="dashboard-card-heading"><div><h2>{title}</h2><p>{subtitle}</p></div></header><div className="dashboard-table-scroll"><table><thead><tr>{columns.map(column=><th scope="col" key={column}>{column}</th>)}</tr></thead><tbody>{rows.map((row,index)=><tr key={index}>{row.map((cell,column)=>column===0?<th scope="row" key={column}>{cell}</th>:<td key={column}>{cell}</td>)}</tr>)}{!rows.length&&<tr><td className="dashboard-table-empty" colSpan={columns.length}>{empty || 'No traffic recorded for this period.'}</td></tr>}</tbody></table></div></section>;
}
export default function AdminTraffic() {
  const [days,setDays] = useState(28);
  const [refresh,setRefresh] = useState(0);
  const [state,setState] = useState({status:'loading',data:null});
  const [measure,setMeasure] = useState('activeUsers');
  const [location,setLocation] = useState('countries');
  useEffect(()=>{
    const controller = new AbortController(); let alive=true;
    async function load(){
      await Promise.resolve();
      if(!alive)return;
      setState({status:'loading',data:null});
      try{
        const {data:{session}}=await getSupabase().auth.getSession();
        if(!session)throw new Error('Sign in to an approved Admin account to view traffic.');
        const response=await fetch(`/api/admin/traffic?days=${days}`,{headers:{Authorization:`Bearer ${session.access_token}`},cache:'no-store',signal:controller.signal});
        const data=await response.json();
        if(!alive)return;
        if(data.code==='NOT_CONFIGURED'){setState({status:'setup',data});return;}
        if(!response.ok)throw new Error(data.error||'Traffic reports could not be loaded.');
        setState({status:'ready',data});
      }catch(error){if(alive&&error.name!=='AbortError')setState({status:'error',data:null,error:error.message});}
    }
    load();return()=>{alive=false;controller.abort();};
  },[days,refresh]);
  const data=state.data;
  const devices=data?.devices || [];
  const totalDeviceSessions=devices.reduce((sum,device)=>sum+device.sessions,0);
  let angle=0;
  const gradient=devices.map((device,index)=>{const start=angle;angle+=device.sessions/Math.max(1,totalDeviceSessions)*360;return `${deviceColors[index%deviceColors.length]} ${start}deg ${angle}deg`;}).join(',');
  const noTraffic=state.status==='ready'&&!data.summary.activeUsers&&!data.summary.views&&!data.summary.sessions;
  return <div className="traffic-dashboard">
    <header className="traffic-toolbar"><div><p>GOOGLE ANALYTICS 4</p><h2>Website traffic</h2><span>Understand who visits your store and how they find it.</span></div><div><select aria-label="Traffic reporting period" value={days} onChange={event=>setDays(Number(event.target.value))}>{[7,28,90].map(value=><option key={value} value={value}>Last {value} days</option>)}</select><button type="button" className="admin-secondary" disabled={state.status==='loading'} onClick={()=>setRefresh(value=>value+1)}><FiRefreshCw aria-hidden="true"/>{state.status==='loading'?'Loading…':'Refresh traffic'}</button></div></header>
    {state.status==='loading'&&<div className="dashboard-card traffic-loading" role="status"><FiBarChart2 aria-hidden="true"/><h3>Loading your traffic reports</h3><p>Fetching Google Analytics data for the selected period.</p></div>}
    {state.status==='setup'&&<TrafficSetup missing={data.missing} email={data.serviceAccountEmail}/>}
    {state.status==='error'&&<div className="dashboard-card traffic-error" role="alert"><h3>Traffic reports are unavailable</h3><p>{state.error}</p><button type="button" className="admin-secondary" onClick={()=>setRefresh(value=>value+1)}>Try again</button></div>}
    {state.status==='ready'&&<>
      <div className="traffic-connected"><span><i/>Connected to GA4</span><span>Includes today · {data.timeZone}</span><span>Updated {new Date(data.updatedAt).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:data.timeZone})}</span></div>
      <div className="traffic-kpis">{[
        {name:'Active visitors',value:count(data.summary.activeUsers),hint:'Unique active visitors',Icon:FiUsers},
        {name:'New visitors',value:count(data.summary.newUsers),hint:'First-time visitors',Icon:FiUsers},
        {name:'Sessions',value:count(data.summary.sessions),hint:'Visits to your store',Icon:FiActivity},
        {name:'Page views',value:count(data.summary.views),hint:'Includes repeat views',Icon:FiEye},
        {name:'Engagement rate',value:`${(data.summary.engagementRate*100).toFixed(1)}%`,hint:'Share of engaged sessions',Icon:FiBarChart2},
        {name:'Realtime visitors',value:data.realtime?count(data.realtime.activeUsers):'—',hint:data.realtime?'Active in the last 30 minutes':'Realtime temporarily unavailable',Icon:FiGlobe},
      ].map(({name,value,hint,Icon})=><div className="dashboard-card traffic-kpi" key={name}><span>{name}<Icon aria-hidden="true"/></span><strong>{value}</strong><small>{hint}</small></div>)}</div>
      {noTraffic&&<div className="traffic-empty-notice"><strong>No traffic recorded yet for this period.</strong><span>Deploy the tracking code and visit the live store. Standard reports can take time to process new events; the realtime count covers the last 30 minutes.</span></div>}
      {data.thresholded&&<p className="traffic-threshold" role="status">Google applied privacy thresholds to some reports, so some rows may be hidden.</p>}
      <TrafficTrend rows={data.daily} measure={measure} onMeasure={setMeasure}/>
      <div className="traffic-grid"><ReportTable title="Traffic sources" subtitle="Top 10 sources by sessions" columns={['Source / medium','Sessions']} rows={data.sources.map(source=>[source.name==='(direct) / (none)'?'Direct':label(source.name),count(source.sessions)])}/><ReportTable title="Top pages" subtitle="Top 10 pages by views" columns={['Page','Views']} rows={data.pages.map(page=>[page.path||'/',count(page.views)])}/></div>
      <div className="traffic-grid"><section className="dashboard-card traffic-devices"><header className="dashboard-card-heading"><div><h2>Devices</h2><p>Sessions by device category</p></div><FiMonitor aria-hidden="true"/></header><div className="traffic-device-body"><div className="traffic-device-ring" role="img" aria-label={devices.length?devices.map(device=>`${device.name}: ${device.sessions} sessions`).join(', '):'No device data'} style={{background:totalDeviceSessions?`conic-gradient(${gradient})`:'#f0e8d8'}}><div><strong>{count(totalDeviceSessions)}</strong><span>sessions</span></div></div><ul>{devices.map((device,index)=><li key={device.name}><span><i style={{backgroundColor:deviceColors[index%deviceColors.length]}}/>{label(device.name)}</span><strong>{count(device.sessions)}<small>{totalDeviceSessions?Math.round(device.sessions/totalDeviceSessions*100):0}%</small></strong></li>)}{!devices.length&&<li>No device data yet.</li>}</ul></div></section>
      <section className="dashboard-card traffic-location-panel"><header className="dashboard-card-heading"><div><h2>Visitor locations</h2><p>Top eight locations by active visitors</p></div><div className="dashboard-chart-switch" role="group" aria-label="Location report"><button type="button" aria-pressed={location==='countries'} onClick={()=>setLocation('countries')}>Countries</button><button type="button" aria-pressed={location==='cities'} onClick={()=>setLocation('cities')}>Cities</button></div></header><div className="dashboard-table-scroll"><table><thead><tr><th scope="col">{location==='countries'?'Country':'City / country'}</th><th scope="col">Visitors</th></tr></thead><tbody>{data[location].map((row,index)=><tr key={index}><th scope="row">{label(row.name)}{row.country&&<small className="dashboard-cell-subtitle">{label(row.country)}</small>}</th><td>{count(row.users)}</td></tr>)}{!data[location].length&&<tr><td colSpan={2} className="dashboard-table-empty">No location data yet.</td></tr>}</tbody></table></div></section></div>
      <p className="traffic-footnote">Source: Google Analytics 4. Reports are cached for one minute and may be delayed by Google processing. Orders and delivered revenue remain available in Overview.</p>
    </>}
  </div>;
}
