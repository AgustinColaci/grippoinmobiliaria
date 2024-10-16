'use client'
import React, { useState } from 'react'
import CardSlider from "./CardSlider";
import CardInfo from "./CardInfo";
import CardButtons from "./CardButtons";

const Card = () => {

  const [count, setCount] = useState(0)

  return (
    <div className='Card'>
      <CardSlider />
      <CardInfo />
      <CardButtons />
    </div>
  )
}

export default Card