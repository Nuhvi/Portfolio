import React from 'react'

const NavCollection = [{ path: 'blog', name: 'writing' }, { path: 'about' }]

function Header({ location }) {
  const pageUrl = location.pathname.match(/\/(.+?)(?=\/|$)/)[1]
  return (
    <header>
      <nav>
        {NavCollection.map((navItem, i) => (
          <a
            href={'/' + navItem.path}
            className={pageUrl === navItem.path ? 'highlight' : ''}
            key={i}
          >
            {navItem.name || navItem.path}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
