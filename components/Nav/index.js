import Link from 'next/link'
import SearchForm from '../SearchForm'
import './index.scss'

export default function Nav() {
  return (
    <div className="header">
      <Link href="/">
        <a className="header_logo">
          <img className="header_logo_image" src="/Logo_ML@2x.png.png"></img>
        </a>
      </Link>
      <div className="header_form">
        <SearchForm/>
      </div>
    </div>
  )
}