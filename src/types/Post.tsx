export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  capa: string; // URL da imagem de capa
  content: string; // HTML ou texto do post
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  __v?: number; // versão do documento (MongoDB)
}