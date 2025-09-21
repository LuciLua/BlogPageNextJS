import { CardPost } from "../components/CardPost";

export default function homepage() {
    return (
        <div>
            <div className="content">
                <h1>Welcome to my blog!</h1>
                <br />
                <h2>Noticias:</h2>
                <br />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <CardPost />
                </div>
            </div>
        </div>
    )
}