'use client'

import { useParams } from 'next/navigation'
import styles from './Post.module.scss'
import { usePostBySlug } from '../../hooks/usePostBySlug'

export function Post() {
  const { slug } = useParams()
  const { post, loading } = usePostBySlug(slug as string)

  if (loading) return <p className={styles.loading}>Carregando post...</p>
  if (!post) return <p className={styles.loading}>Post não encontrado</p>


  const createdDate = new Date(post.createdAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  const updatedDate = new Date(post.updatedAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className={styles.post}>
      <img src={post.capa || '/assets/capa.png'} alt={post.title} className={styles.cover} />
      <div className={styles.content}>
        <p className={styles.author}>{post.author}</p>
        <h1 className={styles.title}>{post.title}</h1>

        <p className={styles.dates}>
          📅 Publicado em <strong>{createdDate}</strong> <br />
          🔄 Atualizado em <strong>{updatedDate}</strong>
        </p>

        <div dangerouslySetInnerHTML={{ __html: post.content }} className={styles.contentBlog}/>
      </div>
    </article>
  )
}
