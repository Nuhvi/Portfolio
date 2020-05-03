import React from 'react'
import Header from './header'

const Layout = ({ location, title, children }) => {
  return (
    <div id="layout-container">
      <Header location={location}></Header>
      <main role="main">{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
