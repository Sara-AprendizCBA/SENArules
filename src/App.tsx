import React, { useMemo, useState, useEffect } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FilterButtons from './components/FilterButtons'
import RuleList from './components/RuleList'
import RuleDetail from './components/RuleDetail'
import StatsBar from './components/StatsBar'
import { initialRules } from './data/rules'
import type { Rule } from './data/rules'

const STORAGE_KEY = 'sena_rules_v1'

export default function App() {
  const [rules, setRules] = useState<Rule[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as Rule[]) : initialRules
    } catch {
      return initialRules
    }
  })

  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string | null>(null)
  const [selected, setSelected] = useState<Rule | null>(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rules))
  }, [rules])

  const categories = useMemo(() => {
    const set = new Set(rules.map((r) => r.category))
    return Array.from(set)
  }, [rules])

  const filtered = useMemo(() => {
    return rules.filter((r) => {
      if (category && r.category !== category) return false
      if (!query) return true
      const q = query.toLowerCase()
      return (
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q)
      )
    })
  }, [rules, query, category])

  const toggleStatus = (id: number) => {
    setRules((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: r.status === 'pending' ? 'compliant' : 'pending' }
          : r
      )
    )
  }

  const compliantCount = rules.filter((r) => r.status === 'compliant').length

  return (
    <div className="container">
      <Header />

      <main>
        <div className="controls">
          <SearchBar value={query} onChange={setQuery} />
          <FilterButtons
            categories={categories}
            active={category}
            onSelect={setCategory}
          />
        </div>

        <StatsBar total={rules.length} compliant={compliantCount} />

        <RuleList
          rules={filtered}
          onSelect={setSelected}
          onToggle={toggleStatus}
        />

        {selected && (
          <RuleDetail
            rule={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </main>
    </div>
  )
}
