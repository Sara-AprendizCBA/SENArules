import React from 'react'


type Props = {
total: number
compliant: number
}


export default function StatsBar({ total, compliant }: Props) {
const percent = total === 0 ? 0 : Math.round((compliant / total) * 100)
return (
<div className="stats">
<div>Total: {total}</div>
<div>Compliant: {compliant}</div>
<div>Progreso: {percent}%</div>
</div>
)
}