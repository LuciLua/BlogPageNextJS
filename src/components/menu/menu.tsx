import Link from 'next/link'
import styles from '../menu/menu.module.scss'

const post = {
    random: randomizar()
}

function randomizar(){
    let num = ((Math.random()*10).toFixed(0) )
    return num
}


export function Menu(){
    return(
        <div className={styles.menu}>
            <ul>
                <Link href={`../`}>
                <li><a>Home</a></li>
                </Link>

                <Link href={`../posts/${post.random}`}>
                <li><a href="">Posts</a></li>
                </Link>
            </ul>
        </div>
    )
}