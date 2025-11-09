import styles from './Footer.module.scss'

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <p>
                    Desenvolvido por <a href="https://lucilua.com.br">Luci Lua</a>
                </p>
            </div>
        </div>
    )
}
