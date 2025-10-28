// import Head from "next/head";
// import { HeadComponentPagePosts } from "../../../components/HeadComponentPagePosts/HeadComponentPagePosts";
import { Post } from "../../../components/Post/Post";
// import { usePostBySlug } from "../../../hooks/usePostBySlug";
import { Metadata } from "next";
import { getPostBySlug } from "../../../lib/posts";


export async function generateMetadata({ params }) {
  const paramss = await params
  const post = await getPostBySlug(paramss.slug);

  if (!post) {
    return {
      title: "The Luci Lens",
      description: "Escritos e reflexões a cerca de assuntos diversos",
      alternates: { canonical: "https://blog.lucilua.com.br" },
    };
  }

  return {
    title: `${post.title} | Luci Lua Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://blog.lucilua.com.br/post/${params.slug}`,
      images: [post.capa],
      siteName: "Luci Lua Blog",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.capa],
      site: "@SeuTwitter",
      creator: "@SeuTwitter",
    },
    alternates: {
      canonical: `https://blog.lucilua.com.br/post/${params.slug}`,
    },
  };
}

export default async function page_noticia({ params }) {
  // const { slug } = await params; // 👈 await no params
  return (
    <>
      <Post />
    </>
  );
}