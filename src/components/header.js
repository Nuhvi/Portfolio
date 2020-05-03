import React from 'react'
import Image from 'gatsby-image'

const NavCollection = [
  { path: '/', name: 'home' },
  { path: '/blog', name: 'writing' },
  { path: '/about', name: 'about' },
]

function Header({ location, avatar, author }) {
  const currPath = location.pathname.match(/(\/.*?)(?=\/|$)/)[0]

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
              <a href={navItem.path}>{navItem.name || navItem.path}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
