'use client'

import { useEffect, useState } from "react"

export function CardPost() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/posts.json')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Erro ao carregar posts:", err))
  }, [])

  return (
    <div
      style={{
        display: "flex",
        // gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "20px",
        maxWidth: "1000px",
        // margin: "40px auto",
        flexWrap: 'wrap',
        justifyContent: "center"
      }}
    >
      {posts.map((post, index) => (
        <article
          key={index}
          style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            cursor: "pointer",
            maxWidth: "320px",
            minWidth: "200px",
            width: "100%"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)"
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)"
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"
          }}
        >
          {/* Imagem */}
          <img
            src={post.capa || "/assets/capa.png"}
            alt={post.title || "Post"}
            style={{
              height: "160px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          {/* Conteúdo */}
          <div style={{ padding: "20px", flex: "1" }}>
            <h2
              style={{
                fontSize: "20px",
                margin: "0 0 10px",
                color: "#111",
                lineHeight: "1.3",
              }}
            >
              {post.title || "Sem título"}
            </h2>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
                marginBottom: "16px",
              }}
            >
              {post.excerpt || "Clique para ler mais..."}
            </p>

            <a
              href={post.slug ? `/${post.slug}` : "/"}
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: "8px",
                background: "#111",
                color: "#fff",
                fontSize: "14px",
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
            >
              Ler postagem →
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}
