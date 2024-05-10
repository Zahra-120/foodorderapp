import React from 'react'
import './Header.css'
import image from '/foodorder/src/assets/food1.jpg'
import Content from '../Content/Content'
import CartButton from './CartButton'

export default function Header() {
  return (
    <>
    <div className='header'>
        <h1>Food Ordering App</h1>
        <CartButton />
    </div>
    <div>
        <img className='image' src={image} alt="foodPicture" />
    </div>
    <Content />
    </>
  )
}
