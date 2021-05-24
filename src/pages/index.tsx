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
    </div>
  )
}
