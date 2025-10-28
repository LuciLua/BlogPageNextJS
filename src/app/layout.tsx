import '../styles/globals.scss'
import { Menu } from '../components/Menu/Menu'
import { Montserrat } from "next/font/google"
import { PostsProvider } from '../contexts/postsContext'


const montserrat = Montserrat({ subsets: ['latin-ext'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export default function root({ children: children }) {


    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Blog - LuciLua</title>
            </head>
            <body className={montserrat.className}>
                <Menu />
                <PostsProvider>
                    {children}
                </PostsProvider>
            </body>
        </html>
    )
}