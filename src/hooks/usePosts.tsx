import { useContext } from "react"
import { PostsContext } from "../contexts/postsContext"

export function usePosts() {
  const context = useContext(PostsContext)
  if (!context)
    throw new Error('usePosts deve ser usado dentro de um PostsProvider')
  return context
}