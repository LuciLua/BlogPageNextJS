'use client'

import { useState } from "react"
import { BsSearch } from "react-icons/bs"
import styles from './SearchBox.module.scss'
import { useRouter } from "next/navigation"

export function SearchBox() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className={styles.searchBox}>
      <div className={styles.searchIcon} onClick={handleSearch}>
        <BsSearch />
      </div>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </div>
  )
}
