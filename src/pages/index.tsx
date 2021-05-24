import styles from '../styles/global.module.scss'

// native imports
import Head from 'next/head'

type Post = {
  id: string;
  title: string;
}

type HomeProps = {
  allPosts: Post[]
}

export default function Home( { allPosts }: HomeProps ) {
  return (
    <div className={styles.main}>
      <Head>
        <title>Blog | Home</title>
      </Head>
      <div className={styles.listOfTables}>

      <div className={styles.table}>
        <div className={styles.tableGG}>
          <div className={styles.tableHead}>
            <div className={styles.tableBall}></div>
            <div className={styles.tableInfoPeople}>
              <h1>Donald Mec</h1>
              <h2>Software Engeneer</h2>
            </div>
          </div>
          <div className={styles.tableG}>
            <div className={styles.tableContent}>
              <button>Information One</button>
              <button>Information Two</button>
              <button>Information Three</button>
            </div>
          </div>
        </div>
        </div>

        <div className={styles.table}>
        <div className={styles.tableGG}>
          <div className={styles.tableHead}>
            <div className={styles.tableBall}></div>
            <div className={styles.tableInfoPeople}>
              <h1>Donald Mec</h1>
              <h2>Software Engeneer</h2>
            </div>
          </div>
          <div className={styles.tableG}>
            <div className={styles.tableContent}>
              <button>Information One</button>
              <button>Information Two</button>
            </div>
          </div>
        </div>
        </div>

        <div className={styles.table}>
        <div className={styles.tableGG}>
          <div className={styles.tableHead}>
            <div className={styles.tableBall}></div>
            <div className={styles.tableInfoPeople}>
              <h1>Donald Mec</h1>
              <h2>Software Engeneer</h2>
            </div>
          </div>
          <div className={styles.tableG}>
            <div className={styles.tableContent}>
            <button>Information One</button>
            </div>
          </div>
        </div>
        </div>

        <div className={styles.table}>
        <div className={styles.tableGG}>
          <div className={styles.tableHead}>
            <div className={styles.tableBall}></div>
            <div className={styles.tableInfoPeople}>
              <h1>Donald Mec</h1>
              <h2>Software Engeneer</h2>
            </div>
          </div>
          <div className={styles.tableG}>
            <div className={styles.tableContent}>
            <button>Information One</button>
            <button>Information Two</button>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}
