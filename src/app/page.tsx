import { CardPost } from "../components/CardPost/CardPost";

export default function homepage() {
    return (
        <div>
            <div className="content">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: "70px" }}>
                    <CardPost />
                </div>
            </div>
        </div>
    )
}