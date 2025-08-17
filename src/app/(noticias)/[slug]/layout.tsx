import styles from "./noticia.module.scss"


export default function root({ children }) {
    return (
        <div className={styles.noticia}>
            <div className="content">
                {children}
            </div>
        </div>
    )
}