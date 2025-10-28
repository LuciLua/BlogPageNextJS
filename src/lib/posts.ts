export async function getPostBySlug(slug: string) {
  const apiUrl =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3003"
      : process.env.API_URL;

  const res = await fetch(`${apiUrl}/api/posts/slug/${slug}`, {
    next: { revalidate: 60 }, // cache opcional
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data;
}
