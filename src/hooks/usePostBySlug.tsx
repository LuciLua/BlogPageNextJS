'use client'

import { useState, useEffect } from 'react'
import { usePosts } from './usePosts'
import { BlogPost } from '../types/Post'

export function usePostBySlug(slug: string) {

    // pega posts do outro fetch
    const { posts } = usePosts()

    // cria espaco na memoria para o post individual
    const [post, setPost] = useState<BlogPost | null>(null)

    // loading appear, true: loading...
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        if (!slug) return

        // localiza post por slug
        let postFound = posts.find(p => p.slug === slug)

        // preenche setPost com o post encontrado
        setPost(postFound)

        // para de carregar
        setLoading(false)

    }, [slug, posts])

    return { post, loading }
}
