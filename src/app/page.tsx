import { GetNoticias } from "../components/getNoticias"

export default async function Homepage() {

  return (
    <div className="content">
      <h1>Welcome to my blog!</h1>
      <h2>Noticias</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <GetNoticias/>
      </div>
    </div>
  )
}