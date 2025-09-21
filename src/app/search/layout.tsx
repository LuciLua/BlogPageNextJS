'use client'

import { Suspense } from "react"

export default function SearchWrapper({ children }) {
    return (
        <Suspense fallback={<p style={{ textAlign: "center", paddingTop: '150px' }}>Carregando busca...</p>}>
            {children}
        </Suspense>
    )
}
