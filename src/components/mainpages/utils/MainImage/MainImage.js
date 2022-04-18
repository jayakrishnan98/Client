import React from 'react'
import mainImage from './mainImage.png'
import './mainImage.css'

export default function MainImage() {
  return (
    <div>
        <img className='image' src={mainImage} alt=""/>
    </div>
  )
}
