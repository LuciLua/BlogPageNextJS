// page.tsx
interface PageProps {
    params: { slug: string };
}

export default async function page_noticia({ params }: PageProps) {
    const { slug } = await params;

    return (
        <div>
            <img src="/assets/capa.png" alt="" style={{height: '150px', width: '100%', objectFit: 'cover', borderRadius: '12px'}} />
            <h1>Notícia {slug}</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti officia perferendis iure qui facilis porro blanditiis et expedita tempora nihil, neque unde dolores enim aperiam vitae maxime esse aut.</p>
        </div>
    );
}