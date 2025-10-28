'use client'

import { usePosts } from "../../hooks/usePosts"
import styles from "./CardPost.module.scss"

export function CardPost() {

  const { posts } = usePosts()

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
