'use client'

import { createContext, useEffect, useState, ReactNode } from 'react'

type Post = any // depois defina seu tipo real

interface PostsContextType {
  posts: Post[]
  refreshPosts: () => Promise<void>
}

export const PostsContext = createContext<PostsContextType | undefined>(undefined)

export function PostsProvider({ children }: { children: ReactNode }) {

  const [posts, setPosts] = useState<Post[]>([])

  async function refreshPosts() {
    try {
      const res = await fetch('/api/posts')
      if (!res.ok) throw new Error('Erro ao buscar posts')
      const data = await res.json()
      setPosts(data)
    } catch (error) {
      console.error('Erro ao carregar posts:', error)
    }
  }

  useEffect(() => {
    refreshPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts, refreshPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
