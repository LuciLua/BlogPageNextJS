import { GetStaticPaths, GetStaticProps } from 'next';
import styles from './posts.module.scss'

import Head from 'next/head'

type Post = {
    title: string;
}

type PostProps = {
    post: Post;
}

export default function Post( {post}: PostProps){
    return(
        <div className={styles.pagePosts}>
            <Head>
                <title>Blog | Posts</title>
            </Head>

        <div className={styles.writePost}>
            <div className={styles.icosWritePost}>
                <ul>
                    <li><b>B</b></li>
                    <li><i>i</i></li>
                    <li><u>u</u></li>
                    <li>|||</li>
                    <li>||</li>
                    <li>|</li>
                </ul>
            </div>
            <textarea>
            </textarea>
            <div className={styles.btns}> 
                <button>Enviar</button>
                <button>Salvar Rascunho</button>
            </div>
        </div>

        <div className={styles.postsEnv}>
            <br />
            <div className={styles.posts}>

            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores similique eligendi architecto at sapiente voluptatibus ratione dicta delectus vitae quae, non optio omnis esse soluta id, fuga fugiat suscipit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quis nostrum quos. Ipsam, officiis sunt. Natus, vero voluptate reprehenderit numquam veniam magni laborum eveniet perspiciatis sint odit quis deserunt distinctio! </p>
            </div>
            <div className={styles.posts}>

            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores similique eligendi architecto at sapiente voluptatibus ratione dicta delectus vitae quae, non optio omnis esse soluta id, fuga fugiat suscipit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quis nostrum quos. Ipsam, officiis sunt. Natus, vero voluptate reprehenderit numquam veniam magni laborum eveniet perspiciatis sint odit quis deserunt distinctio! </p>
            </div>
            </div>
        </div>
    )
}
