'use client'

import { createContext, useEffect, useState, ReactNode } from 'react'
import { BlogPost } from '../types/Post'


interface PostsContextType {
  posts: BlogPost[]
  refreshPosts: () => Promise<void>
}

export const PostsContext = createContext<PostsContextType | undefined>(undefined)

export function PostsProvider({ children }: { children: ReactNode }) {

  const [posts, setPosts] = useState<BlogPost[]>([])

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
