'use client'

import { useEffect, useState } from "react"
import styles from "./CardPost.module.scss"

export function CardPost() {
  const [posts, setPosts] = useState<any[]>([])

  const api_url = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    if (!api_url) {
      console.error("API_URL não definida")
      return
    }

    fetch(`${api_url}/api/posts`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Erro ao carregar posts:", err))
  }, [api_url])

  return (
    <div className={styles.grid}>
      {posts.map((post, index) => (
        <article key={index} className={styles.card}>
          <a href={post.slug ? `/post/${post.slug}` : "/"}>
            <img
              src={post.capa || "/assets/capa.png"}
              alt={post.title || "Post"}
              className={styles.image}
            />

            <div className={styles.content}>
              <h2 className={styles.title}>
                {post.title || "Sem título"}
              </h2>

              <p className={styles.excerpt}>
                {post.excerpt || "Clique para ler mais..."}
              </p>

              <p className={styles.link}>Ler mais →</p>
            </div>
          </a>
        </article>
      ))}
    </div>
  )
}
