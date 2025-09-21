'use client'

import { useEffect, useState } from "react"
import styles from "./CardPost.module.scss"

export function CardPost() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    fetch('/posts.json')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Erro ao carregar posts:", err))
  }, [])

  return (
    <div className={styles.grid}>
      {posts.map((post, index) => (
        <article key={index} className={styles.card}>
          <a
            href={post.slug ? `/post/${post.slug}` : "/"}>
            {/* Imagem */}
            <img
              src={post.capa || "/assets/capa.png"}
              alt={post.title || "Post"}
              className={styles.image}
            />

            {/* Conteúdo */}
            <div className={styles.content}>
              <h2 className={styles.title}>
                {post.title || "Sem título"}
              </h2>

              <p className={styles.excerpt}>
                {post.excerpt || "Clique para ler mais..."}
              </p>

              <p
                className={styles.link}
              >
                Ler mais →
              </p>
            </div>
          </a>
        </article>
      ))}
    </div>
  )
}
