export function Menu() {
    return (
        <div style={{ width: '100%', background: '#000000ff', color: '#ffffff' }}>
            <div className="content" style={{ display: 'flex', gap: '10px', marginBottom: '10px', justifyContent: 'space-between' }}>
                <div style={{ gap: '20px', display: 'flex' }}>
                    <a href="/" style={{ textDecoration: 'none' }}>Logo</a>
                </div>
                <div style={{display: "flex", gap: '20px'}}>
                    <a href="/" style={{ textDecoration: 'none' }}>Homepage</a>
                    <a href="https://lucilua.com.br" style={{ textDecoration: 'none' }}>Meu site</a>

                </div>
            </div>
        </div>
    )
}