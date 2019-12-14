import Head from 'next/head'
import Nav from '../components/Nav'
import './Main.scss'

export default ({ children, title = 'This is the default title' }) => (
  <div className="layout layout--main">
    <Head>
      <title>{ title }</title>
    </Head>
    
    <header>
      <Nav />
    </header>

    <main>
      <div className="content">
        { children }
      </div>
    </main>
  </div>
)