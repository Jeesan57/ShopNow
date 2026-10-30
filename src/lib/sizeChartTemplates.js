import { SIZE_MEASUREMENTS } from './comboSizing';
export const SIZE_CHART_TEMPLATES = [
  {id:'tops',name:'T-shirt / shirt',measurements:['Chest width (flat)','Body length']},
  {id:'knitwear',name:'Sweater / hoodie',measurements:['Chest width (flat)','Body length']},
  {id:'pants',name:'Pants / denim — waist & length',measurements:['Waist circumference','Length']},
];
export function applySizeChartTemplate(item, template) {
  return {...item,measurements:[...template.measurements],chart:Object.fromEntries((item.sizes||[]).map(size=>[size,Object.fromEntries(template.measurements.filter(label=>Number.isFinite(item.chart?.[size]?.[label])).map(label=>[label,item.chart[size][label]]))]))};
}
export function singleSizeChart(product) {
  const kind=product.size_charts?.denim && !product.size_charts?.sweater?'denim':Object.keys(product.size_charts?.denim||{}).length?'denim':'sweater';
  const fields=SIZE_MEASUREMENTS[kind].filter(([key])=>(kind==='denim'?['waist','length']:['chest','length']).includes(key)||(kind==='denim'&&Object.values(product.size_charts?.[kind]||{}).some(row=>Number.isFinite(row[key]))));
  return {id:kind,name:kind==='denim'?'Pants':'Product',sizes:product.sizes||[],unit:'in',measurements:fields.map(([,label])=>label),chart:Object.fromEntries(Object.entries(product.size_charts?.[kind]||{}).map(([size,row])=>[size,Object.fromEntries(fields.filter(([key])=>Number.isFinite(row[key])).map(([key,label])=>[label,row[key]]))]))};
}
export function storeSingleChart(item) {
  const kind=item.measurements.includes('Waist circumference')?'denim':'sweater';
  return {[kind]:Object.fromEntries(item.sizes.map(size=>[size,Object.fromEntries(SIZE_MEASUREMENTS[kind].filter(([,label])=>Number.isFinite(item.chart?.[size]?.[label])).map(([key,label])=>[key,item.unit==='cm'?Math.round(item.chart[size][label]/2.54*100)/100:item.chart[size][label]]))]))};
}
