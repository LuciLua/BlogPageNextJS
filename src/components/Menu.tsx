export function Menu() {
    return (
        <div style={{ width: '100%', background: '#000000ff', color: '#ffffff' }}>
            <div className="content" style={{ display: 'flex', gap: '10px', marginBottom: '10px', justifyContent: 'space-between' }}>
                <div style={{ gap: '20px', display: 'flex' }}>
                    <a href="/" style={{ textDecoration: 'none' }}>Logo</a>
                </div>
                <div style={{gap: "10px", display: 'flex'}}>
                    <a href="https://www.lucilua.com.br/" style={{ textDecoration: 'none' }}>Portfolio</a>
                    <a href="/" style={{ textDecoration: 'none' }}>Homepage</a>
                </div>
            </div>
        </div>
    )
}