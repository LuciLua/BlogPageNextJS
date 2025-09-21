'use client'

import { Suspense } from "react"

export default function SearchWrapper({ children }) {
    return (
        <Suspense fallback={<p style={{ textAlign: "center", paddingTop: '70px' }}>Carregando busca...</p>}>
            {children}
        </Suspense>
    )
}
