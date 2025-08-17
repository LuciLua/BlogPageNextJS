import styles from "./noticia.module.scss"

export default function root({ children, params }: { children: React.ReactNode, params: { slug: string } }) {
    return (
        <div className={styles.noticia}>
            <div className="content">
                {children}
            </div>
        </div>
    )
}