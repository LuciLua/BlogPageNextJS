'use client'

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import styles from "./Post.module.scss"
import { BsPersonSquare } from "react-icons/bs";
import { getUrlAPI } from "../../utils/getUrlAPI";
import { revalidate } from "../../utils/setRevalidade";


export function Post() {
  const [posts, setPosts] = useState<any[]>([])
  const params = useParams()
  const { slug } = params

  const api_url = getUrlAPI()

  useEffect(() => {
    if (!api_url) {
      console.error("API_URL não definida")
      return
    }

    fetch(`${api_url}/api/posts`, { next: { revalidate: revalidate } })
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Erro ao carregar posts:", err))
  }, [api_url])


  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <p className={styles.loading}>
        Carregando post...
      </p>
    )
  }

  // formatar as datas
  const createdDate = new Date(post.createdAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })

  const updatedDate = new Date(post.updatedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })

  return (
    <article className={styles.post}>
      {/* Capa */}
      <img
        src={post.capa || "/assets/capa.png"}
        alt={post.title || "Post"}
        className={styles.cover}
      />

      {/* Conteúdo */}
      <div className={styles.content}>
        <p className={styles.author}><BsPersonSquare /> {post.author}</p>
        <h1 className={styles.title}>{post.title}</h1>

        <p className={styles.dates}>
          📅 Publicado em <strong>{createdDate}</strong> <br />
          🔄 Atualizado em <strong>{updatedDate}</strong>
        </p>

        <hr className={styles.hr} />

        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}
