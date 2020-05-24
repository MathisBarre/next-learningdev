import styles from "./app.module.sass"
import Head from 'next/head'
import Link from 'next/link'
// import navJson from '../data/sources.json'
// import PropTypes from 'prop-types';

import "../styles/global.sass"
import "../styles/normalize.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Developers Learning Depository</title>
      </Head>
      <div className={styles.app}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>
            <span className={styles.headerTitleItems}>Developers</span><br />
            <span className={styles.headerTitleItems}>Learning</span><br />
            <span className={styles.headerTitleItems}>Depository</span>
          </h1>
          <nav className={styles.nav}>
            {pageProps.navigation.map(navGroup => {
              const key = navGroup.title.replace(/\W/g, "").toLowerCase()
              return (
                <div key={key} className={styles.navGroup}>
                  <h2 className={styles.navGroupTitle}>{navGroup.title}</h2>
                  {navGroup.languages.map(language => {
                    const key = language.label.replace(/\W/g, "").toLowerCase()
                    return <NavItem key={key} {...language} />
                  })}
                </div>
              )
            })}
          </nav>
        </header>
        <Component {...pageProps} />
        <div className={styles.version}>Pre-Alpha</div>
      </div>
    </>
  )
}

// App.defaultProps = {
//   pageProps: {
//     navigation: navJson
//   }
// }

function NavItem({img, label}) {
  return (
    <div className={styles.navGroupItem}>
      <img className={styles.navGroupItemImg} src={img} alt="" />
      <Link href={`/${label.replace(/\W/g, "").toLowerCase()}`}><a className={styles.navGroupItemLabel} >{label}</a></Link>
    </div>
  )
}