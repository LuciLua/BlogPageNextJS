import styles from '../front/front.module.scss'

export function Front(){
    return(
    <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>Super Brush</h1>
            <h2>Escritos sobre arte</h2>          
          </div>
        </div>
     </div>
    )
}