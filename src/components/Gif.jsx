import React from 'react'
import './gifs.css'

const Gif = ({ id, title, url }) => {
  return (
    <a href={`#${id}`} className='Gifs'>
      <h4>{title}</h4>
      <br />
      <img src={url} alt={title} />
    </a>
  )
}

export default Gif