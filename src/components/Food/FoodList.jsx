import React from 'react'
import './FoodList.css'
import FoodItem from './FoodItem'

export default function FoodList() {
  const dummy = [
    {
      id : 1,
      name : "Classic Chicken Tikka",
      description : "Boneless Chicken Chunks roasted in a clay oven with Indian Spices and Hung Curd",
      price : 22.99
    },
    {
      id : 2,
      name : "Burmese Khow Suey",
      description : "A creamy delicacy cooked in Coconut Milk with numerous toppings",
      price : 16.50
    },
    {
      id : 3,
      name : "Penne Arrabbiata (Veg/Chicken)",
      description : "Pasta mixed in a Spicy Sauce made from Garlic, Tomatoes and Dried Red Chili Peppers",
      price : 12.99
    },
    {
      id : 4,
      name : "BBQ Chicken",
      description : "Classic Barbeque Flavoured Chicken toppings on Thin Crust Pizza",
      price : 18.99
    }
  ]

  return (
    <>
      <ul className='ul'>
      {dummy.map((item) => (
          <FoodItem key={item.id} item={item} />
        ))}
      {/* <FoodItem arr = {dummy} /> */}
      </ul>
      
    </>
  )
}
