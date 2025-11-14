import React from 'react'
import { Rule } from './data/rules'


type Props = {
rule: Rule | null
onClose: () => void
onToggle: (id: number) => void
}


export default function RuleDetail({ rule, onClose, onToggle }: Props) {
if (!rule) return null
return (
<div className="modal" role="dialog" aria-modal="true" aria-labelledby="detail-title">
<div className="modal-content">
<header>
<h2 id="detail-title">{rule.title}</h2>
<button onClick={onClose} aria-label="Cerrar">✕</button>
</header>
<p className="meta">Categoría: <strong>{rule.category}</strong></p>
<p className="desc">{rule.description}</p>
<div className="modal-actions">
<button onClick={() => onToggle(rule.id)}>
{rule.status === 'pending' ? 'Marcar como compliant' : 'Marcar como pending'}
</button>
<button onClick={onClose}>Cerrar</button>
</div>
</div>
</div>
)
}