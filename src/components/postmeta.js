import React from 'react'
import '../styles/_postmeta.scss'

function Postmeta({ metadata }) {
  const { date, tags } = metadata
  return (
    <small className="postmeta">
      <time datetime={`${new Date(date).toLocaleString()}`}>{date}</time>
      <span className="tags">{tags ? ' . ' + tags : ''}</span>
    </small>
  )
}

export default Postmeta
