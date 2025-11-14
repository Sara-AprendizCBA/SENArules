import React from 'react'
import type { Rule } from '../data/rules'

type Props = {
  rule: Rule
  onToggle: (id: number) => void
  onSelect: (r: Rule) => void
}

export default function RuleCard({ rule, onToggle, onSelect }: Props) {
  return (
    <article className="rule-card" aria-labelledby={`rule-title-${rule.id}`}>
      <div className="rule-card-top">
        <h3 id={`rule-title-${rule.id}`}>{rule.title}</h3>
        <span className={`badge ${rule.status}`}>{rule.status}</span>
      </div>

      <p className="category">{rule.category}</p>

      <p className="excerpt">
        {rule.description.slice(0, 100)}
        {rule.description.length > 100 ? '…' : ''}
      </p>

      <div className="card-actions">
        <button onClick={() => onSelect(rule)}>Ver</button>

        <button
          onClick={() => onToggle(rule.id)}
          aria-pressed={rule.status === 'compliant'}
        >
          {rule.status === 'pending'
            ? 'Marcar compliant'
            : 'Marcar pending'}
        </button>
      </div>
    </article>
  )
}
