

type Props = {
categories: string[]
active: string | null
onSelect: (c: string | null) => void
}


export default function FilterButtons({ categories, active, onSelect }: Props) {
return (
<div className="filters" role="toolbar" aria-label="Filtros de categoría">
<button className={!active ? 'active' : ''} onClick={() => onSelect(null)}>Todas</button>
{categories.map((c) => (
<button key={c} className={active === c ? 'active' : ''} onClick={() => onSelect(active === c ? null : c)}>
{c}
</button>
))}
</div>
)
}