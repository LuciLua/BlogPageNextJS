'use client'

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "./SearchPage.module.scss"
import { usePosts } from "../../hooks/usePosts"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<any[]>([])

  const { posts } = usePosts()

  useEffect(() => {
    if (query) {
      const filtered = posts.filter((post: any) => post.title.toLowerCase().includes(query.toLowerCase()) || post.excerpt.toLowerCase().includes(query.toLowerCase()))
      setResults(filtered)
    }
  }, [query])

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Resultados para <span>{query}</span>
      </h1>

      {results.length > 0 ? (
        <div className={styles.results}>
          {results.map((post, i) => (
            <a key={i} href={`/post/${post.slug}`} className={styles.result}>
              <div className={styles.text}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
              <img
                src={post.capa || "/assets/capa.png"}
                alt={post.title}
                className={styles.thumb}
              />
            </a>
          ))}
        </div>
      ) : (
        query && <p className={styles.empty}>Nenhum resultado encontrado.</p>
      )}
    </div>
  )
}
