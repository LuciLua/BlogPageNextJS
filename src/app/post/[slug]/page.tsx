import { HeadComponentPagePosts } from "../../../components/HeadComponentPagePosts/HeadComponentPagePosts";
import { Post } from "../../../components/Post/Post";


export default async function page_noticia({ params, searchParams }) {
  const { slug } = await params; // 👈 await no params
  return (
    <>
      <HeadComponentPagePosts slug={slug} />
      <Post />
    </>
  );
}