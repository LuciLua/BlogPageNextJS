'use client'

import styles from './Menu.module.scss'
import { BsSearch } from 'react-icons/bs'
import { SearchBox } from './SearchBox/SearchBox'

export function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <a href="/"><img src={'/assets/white.png'}/></a>
                    <SearchBox />
                </div>
                <div className={styles.right}>
                    <a href="/">Homepage</a>
                    <a href="https://www.lucilua.com.br/">Portfolio</a>
                    <a href="/">Categorias</a>
                </div>
            </div>
        </div>
    )
}
