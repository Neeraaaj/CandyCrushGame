import React from 'react'
import './button.css'

const Button = ({ src }) => {
  return (
    <div className='btn'>
        <img  src={src} />
    </div>
  )
}

export default Button