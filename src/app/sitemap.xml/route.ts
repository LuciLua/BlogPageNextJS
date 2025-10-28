import { NextResponse } from "next/server";
import { revalidate } from "../../utils/setRevalidade";

export async function GET() {
  let api_url: string;

  if (process.env.NODE_ENV !== "production") {
    api_url = "http://localhost:3003";
  } else {
    api_url = process.env.API_URL!;
  }

  let posts = [];

  try {
    const res = await fetch(`${api_url}/api/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      next: { revalidate },
    });

    posts = await res.json();
  } catch (err) {
    return NextResponse.json(
      { error: "Erro interno do servidor", details: String(err) },
      { status: 500 }
    );
  }

  const baseUrl = "https://blog.lucilua.com.br";

  const urls = posts
    .map((post: any) => {
      const lastmod = post.updatedAt
        ? new Date(post.updatedAt).toISOString()
        : new Date().toISOString();

      return `
        <url>
          <loc>${baseUrl}/post/${post.slug}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    ${urls}
  </urlset>`.trim();

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
