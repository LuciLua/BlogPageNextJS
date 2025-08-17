export default function homepage() {
    return (
        <div>
            <div className="content">
                <h1>Welcome to my blog!</h1>
                <br />
                <h2>Noticias:</h2>
                <br />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ background: '#ffffffff', padding: '20px', borderRadius: '12px', boxShadow: '0 0 12px #00000033' }}>
                        <img src="/assets/capa.png" alt="" style={{ height: '120px', width: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                        <a href="/a">Ler postagem</a>
                    </div>
                    <div style={{ background: '#ffffffff', padding: '20px', borderRadius: '12px', boxShadow: '0 0 12px #00000033' }}>
                        <img src="/assets/capa.png" alt="" style={{ height: '120px', width: '100%', objectFit: 'cover', borderRadius: '12px' }} />

                        <a href="/a">Ler postagem</a>
                    </div>
                    <div style={{ background: '#ffffffff', padding: '20px', borderRadius: '12px', boxShadow: '0 0 12px #00000033' }}>
                        <img src="/assets/capa.png" alt="" style={{ height: '120px', width: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                        <a href="/a">Ler postagem</a>
                    </div>
                </div>
            </div>
        </div>
    )
}