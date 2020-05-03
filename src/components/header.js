import React from 'react'
import Image from 'gatsby-image'

const NavCollection = [
  { path: '/', name: 'home' },
  { path: 'blog', name: 'writing' },
  { path: 'about' },
]

function Header({ location, avatar, author }) {
  let currPath = location.pathname.match(/\/(.+?)(?=\/|$)/)
  currPath = (currPath && currPath[1]) || '/'

  return (
    <header className="header" role="banner">
      <a href="/" aria-label="Go to homepage" className="brand">
        <Image fixed={avatar.childImageSharp.fixed} alt={author.name} />
        <span>{author.name}</span>
      </a>
      <nav>
        <ul className="nav_menu">
          {NavCollection.map((navItem, key) => (
            <li key={key} className={currPath === navItem.path ? 'active' : ''}>
              <a href={'/' + navItem.path}>{navItem.name || navItem.path}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
