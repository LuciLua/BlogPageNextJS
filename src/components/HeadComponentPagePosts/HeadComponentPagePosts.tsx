'use client'

import { usePostBySlug } from "../../hooks/usePostBySlug";

export function HeadComponentPagePosts({ slug }: { slug: string }) {
  
  const { post } = usePostBySlug(slug);

  const isLoaded = !!post;

  const title = isLoaded ? `${post.title} | Luci Lua Blog` : "The Luci Lens";
  const description = isLoaded
    ? post.excerpt
    : "Escritos e reflexões a cerca de assuntos diversos";
  const author = isLoaded ? post.author : "Luci Lua";
  const image = isLoaded ? post.capa : "https://blog.lucilua.com.br/images/5.jpg";
  const canonical = isLoaded
    ? `https://blog.lucilua.com.br/post/${slug}`
    : "https://blog.lucilua.com.br";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Luci Lua Blog" />
      <meta property="article:author" content={author} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@SeuTwitter" />
      <meta name="twitter:creator" content="@SeuTwitter" />

      {/* Extras */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={author} />
    </>
  );
}
