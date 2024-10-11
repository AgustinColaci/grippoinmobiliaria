'use client'
import React, { useState } from 'react'

const Card = () => {

  const [count, setCount] = useState(0)

  return (
    <div className='Card'>
        <div  className="slider">
          <div className="slider__img--temporal"></div>
          <div className='slider__pils'>
            <div className="slider__img__total">
                5/5
            </div>
            <div className="slider__code">
              Cod.1234
            </div>
          </div>
        </div>

        <div className='card__info'>
          <span className='mts'>44m2</span>
          <span className='amb'>2 amb.</span>
          <span className='dorm'>1 dorm.</span>
          <span className='bano'>1 baño</span>
          <span className='coch'>1 coch.</span>
        </div>
        <div className='card__info--expensas'>
          <span className='valor'>
            <span className='peso'>$</span> 20.000 Expensas
          </span>
        </div>
        <div className='card__info--direc'>
          Dirección 1234
        </div>
        <div className='card__info--ubic'>
          <a className='link' href="https://maps.app.goo.gl/igLACjzeGR771tNA8">Ubicación</a>
        </div>
        <div className='card__info--valor'>
          <span className='usd'>USD</span> 40.000
        </div>

        
        <div className='card__buttons'>
          <div className='card__buttons--wsp'>
            <a href="#"></a>
          </div>
          <div className='card__buttons--verMas'>
            <a className="button button--verMas" href="#">Ver más</a>
          </div>
        </div>
    </div>
  )
}

export default Card