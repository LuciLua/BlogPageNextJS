'use client'
import { useEffect, useState } from "react"

export function GetNoticias() {
  const [nomes, setNomes] = useState<string[]>([])

  useEffect(() => {
    async function pegar() {
      try {
        const res = await fetch(
          "/assets/noticias.json"
        )

        if (!res.ok) throw new Error("Erro ao buscar notícias")

        const data = await res.json()
        // pega apenas os nomes e salva no estado
        const nomesNoticias = data.noticias.map((n: any) => n.nome)
        setNomes(nomesNoticias)
      } catch (err) {
        console.error(err)
        setNomes(["Erro ao carregar notícias"])
      }
    }

    pegar()
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {nomes.map((n: any, index: number) => (
        <div
          key={index}
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 0 12px #00000033",
          }}
        >
          <img
            src="/assets/capa.png"
            alt="capa"
            style={{
              height: "120px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
          <h2 style={{ margin: "12px 0", fontSize: "18px", color: '#121212' }}>{n}</h2>
          <a
            href={`/${n}`}
            style={{
              display: "inline-block",
              marginTop: "8px",
              color: "#0070f3",
              textDecoration: "none",
            }}
          >
            Ler postagem
          </a>
        </div>
      ))}
    </div>
  )
}
