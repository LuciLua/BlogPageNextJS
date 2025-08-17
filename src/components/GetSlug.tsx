'use client'

import { useRouter } from "next/router"


export const getSlug = () => {
    const router = useRouter()
    const { slug } = router.query
    return slug
}