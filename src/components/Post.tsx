'use client'

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export function Post() {
  const [posts, setPosts] = useState([])
  const params = useParams()
  const { slug } = params

  useEffect(() => {
    fetch('/posts.json')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Erro ao carregar posts:", err))
  }, [])

  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <p style={{ textAlign: "center", marginTop: "50px", color: "#888" }}>
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
    <article
      style={{
        maxWidth: "800px",
        // margin: "40px auto",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Capa */}
      <img
        src={post.capa || "/assets/capa.png"}
        alt={post.title || "Post"}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      {/* Conteúdo */}
      <div style={{ padding: "30px 40px" }}>
        {/* Título */}
        <h1
          style={{
            marginTop: 0,
            marginBottom: "10px",
            fontSize: "32px",
            lineHeight: "1.2",
            color: "#111",
          }}
        >
          {post.title}
        </h1>

        {/* Datas */}
        <p
          style={{
            fontSize: "14px",
            color: "#666",
            marginBottom: "20px",
          }}
        >
          📅 Publicado em <strong>{createdDate}</strong> <br />
          🔄 Atualizado em <strong>{updatedDate}</strong>
        </p>

        <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "20px 0" }} />

        {/* Conteúdo HTML */}
        <div
          style={{
            lineHeight: "1.8",
            fontSize: "17px",
            color: "#333",
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}
