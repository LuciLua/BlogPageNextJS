//global styles
import '../styles/global.scss'

//module styles
import styles from '../styles/global.module.scss'

//components import
import { Menu } from '../components/menu/menu'
import { Front } from '../components/front/front'

function MyApp({ Component, pageProps }) {

  return(

  <> <div className={styles.spc}>
  </div>
      <Menu />
    <main>
      <div className={styles.bodyScroll}>
      <Front />
      <Component {...pageProps} />
      </div>
    </main>
  </>
  )
}

export default MyApp
