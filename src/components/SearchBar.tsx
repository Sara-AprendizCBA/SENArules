import React from 'react'


type Props = {
value: string
onChange: (v: string) => void
}


export default function SearchBar({ value, onChange }: Props) {
return (
<div className="searchbar">
<label htmlFor="search" className="sr-only">Buscar normas</label>
<input
id="search"
placeholder="Buscar por título o descripción..."
value={value}
onChange={(e) => onChange(e.target.value)}
aria-label="Buscar normas"
/>
</div>
)
}