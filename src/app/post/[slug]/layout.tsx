import Link from "next/link"
import styles from "./noticia.module.scss"

export default function Root({ children }) {
    return (
        <div className={styles.noticia}>
            <div className={styles.container}>
                {/* Botão de voltar */}
                <Link href="/"
                    className={styles.backButton}
                >
                    ← Voltar
                </Link>
                {/* Conteúdo do post */}
                    {children}
            </div>
        </div>
    )
}
