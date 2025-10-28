import Head from "next/head";
import { HeadComponentPagePosts } from "../../../components/HeadComponentPagePosts/HeadComponentPagePosts";
import { Post } from "../../../components/Post/Post";

// page.tsx
interface PageProps {
  params: Promise<{ slug: string }>;
  // title: string;
  // description?: string;
}


export default async function page_noticia({ params }: PageProps) {

  const { slug } = await params; // 👈 await no params
  // const { author, canonicalUrl, capa, title, excerpt } = HeadComponentPagePosts({ slug })

  return (
    <>
      <HeadComponentPagePosts slug={slug} />
      <Post />
      {/* <Head>
        <title>{title} | Luci Lua Blog</title>
        <meta name="description" content={excerpt} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={capa} />
        <meta property="og:site_name" content="Luci Lua Blog" />
        <meta property="article:author" content={author} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={capa} />
        <meta name="twitter:site" content="@SeuTwitter" />
        <meta name="twitter:creator" content="@SeuTwitter" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content={author} />
      </Head> */}
    </>
  );
}