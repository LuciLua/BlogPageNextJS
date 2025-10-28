import { NextResponse } from 'next/server';
import { revalidate } from '../../../../../utils/setRevalidade';

export async function GET(
    request: Request,
    context: { params: { id: string } }
) {

    const { id } = await context.params;
    
    var api_url: string;
    if (process.env.NODE_ENV != 'production') { api_url = 'http://localhost:3003' } else { api_url = process.env.API_URL }
    
    try {
        const res = await fetch(`${api_url}/api/posts/id/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_TOKEN}`
            },
            next: {
                revalidate: revalidate
            },
            
        });

        if (!res.ok) {
            const text = await res.text();
            return NextResponse.json({ error: 'Erro ao buscar post', details: text, more: api_url }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);

    } catch (err) {
        return NextResponse.json({ error: 'Erro interno do servidor', details: err }, { status: 500 });
    }
}
