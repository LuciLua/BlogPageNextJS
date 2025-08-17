export default function root({ children: children }) {
    return (
        <div>
            {children}
            <div className="content">
                <a href="/">Voltar</a>
            </div>
        </div>
    )
}