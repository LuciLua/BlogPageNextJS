import styles from '../styles/global.module.scss'

import Link  from 'next/link';

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

    </div>
  )
}
