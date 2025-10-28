'use client'
import { usePostBySlug } from "../hooks/usePostBySlug";

export function getPostBySlug({ slug }) {
    const posts = usePostBySlug(slug)
    return posts.post
} 