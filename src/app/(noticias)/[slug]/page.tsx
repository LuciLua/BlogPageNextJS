import { Post } from "../../../components/Post";

// page.tsx
interface PageProps {
  params: Promise<{ slug: string }>;
}


export default async function page_noticia({ params }: PageProps) {
  const { slug } = await params; // 👈 await no params

  return (
    <Post />
  );
}