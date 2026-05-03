import { formatMoney } from '../../modules/finanzas/finanzasUtils';
export default function MetricCard({ label, value, hint, money=true }) { return <div className='card metric'><span>{label}</span><strong>{money ? formatMoney(value) : value}</strong>{hint && <small>{hint}</small>}</div> }
