import React from 'react'
import { Rule } from '../data/rules'
import RuleCard from './RuleCard'


type Props = {
rules: Rule[]
onToggle: (id: number) => void
onOpen: (r: Rule) => void
}


export default function RuleList({ rules, onToggle, onOpen }: Props) {
if (rules.length === 0) return <p className="empty">No se encontraron normas.</p>
return (
<section className="rule-list">
{rules.map((r) => (
<RuleCard key={r.id} rule={r} onToggle={onToggle} onOpen={onOpen} />
))}
</section>
)
}