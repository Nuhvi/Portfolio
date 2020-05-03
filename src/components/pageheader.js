import React from 'react'
import '../styles/_page_header.scss'

function PageHeader({ title, subtitle, children }) {
  return (
    <header className="page_header">
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : children}
    </header>
  )
}

export default PageHeader
