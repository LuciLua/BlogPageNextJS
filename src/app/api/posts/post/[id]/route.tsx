import { NextRequest, NextResponse } from 'next/server';
import { revalidate } from '../../../../../utils/setRevalidade'

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id: string }> } // Type context.params as a Promise
): Promise<NextResponse> {

    try {
        const { id } = await context.params; // Await context.params to get the object


        const api_url =
            process.env.NODE_ENV !== 'production'
                ? 'http://localhost:3003'
                : process.env.API_URL


        const res = await fetch(`${api_url}/api/posts/id/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_TOKEN}`,
            },
            next: { revalidate },
        })

        if (!res.ok) {
            const text = await res.text()
            return NextResponse.json(
                { error: 'Erro ao buscar post', details: text, more: api_url },
                { status: res.status }
            )
        }

        const data = await res.json()
        return NextResponse.json(data)
    } catch (err) {
        return NextResponse.json(
            { error: 'Erro interno do servidor', details: String(err) },
            { status: 500 }
        )
    }
}
