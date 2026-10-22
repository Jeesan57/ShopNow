import AdminChartTemplate from './AdminChartTemplate';
import { singleSizeChart, storeSingleChart } from '../lib/sizeChartTemplates';
export default function AdminSingleSizeChart({product,products,onChange}) {
 const item=singleSizeChart(product);
 const update=next=>onChange({...product,size_charts:storeSingleChart(next)});
 return <details className="admin-combo-chart"><summary>Size chart template <span>Optional</span></summary><AdminChartTemplate item={item} products={products.filter(p=>p.id!==product.id)} onChange={update}/><p className="admin-combo-note">Measurements in inches. Add sizes above, then enter measurements below. Blank values are hidden from customers.</p>{item.sizes.length>0&&<div className="admin-table-wrap"><table><thead><tr><th>Size</th>{item.measurements.map(label=><th key={label}>{label} (in)</th>)}</tr></thead><tbody>{item.sizes.map(size=><tr key={size}><th scope="row">{size}</th>{item.measurements.map(label=><td key={label}><input aria-label={`${size} ${label} (in)`} type="number" min="0.01" max="200" step="0.01" placeholder="—" value={item.chart[size]?.[label]??''} onChange={event=>{const row={...item.chart[size]};if(event.target.value==='')delete row[label];else row[label]=Number(event.target.value);update({...item,chart:{...item.chart,[size]:row}});}}/></td>)}</tr>)}</tbody></table></div>}</details>;
}
