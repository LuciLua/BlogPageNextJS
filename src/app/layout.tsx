import { Menu } from '../components/Menu'
import '../styles/globals.scss'

export default function root({ children: children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BlogLua</title>
            </head>
            <body>
                <Menu />
                {children}
            </body>
        </html>
    )
}