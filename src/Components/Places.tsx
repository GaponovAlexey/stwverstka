import React from 'react'
import one from '../img/jpg/1.jpg'
import two from '../img/jpg/2.jpg'
import three from '../img/jpg/3.jpg'
import four from '../img/jpg/4.jpg'
import five from '../img/jpg/5.jpg'
export const Places = () => {
  return (
    <div className='places'>
      <div className='wrapper-full'>
        <div className='places__catipon'>
          <h2 className='places__title section__title '>
            Get inspired for your next trip
          </h2>
          <a href='!=' className='places__vies-all'>
            VIEW ALL
          </a>
        </div>
        <div className='places__cards'>
          {/* top */}
          <figure className='places__card places__card_size_lg '>
            <img
              src={one}
              alt='Mount Fuji'
              className='places__card-pic places__card-pic_size-lg '
            />
            <figcaption className='places__card-title'>Mount Fuji</figcaption>
            <a href='#!' className='places__card-link'></a>
          </figure>

          <figure className='places__card places__card_size_lg '>
            <img
              src={two}
              alt='Tokyo'
              className='places__card-pic places__card-pic_size-lg'
            />
            <figcaption className='places__card-title'>Tokyo</figcaption>
            <a href='#!' className='places__card-link'></a>
          </figure>

          {/* bot */}
          <figure className='places__card places__card_size_sm '>
            <img
              src={three}
              alt='Niigata'
              className='places__card-pic places__card-pic_size-sm'
            />
            <figcaption className='places__card-title'>Niigata</figcaption>
            <a href='#!' className='places__card-link'></a>
          </figure>

          <figure className='places__card places__card_size_sm '>
            <img
              src={four}
              alt='Sapporo'
              className='places__card-pic places__card-pic_size-sm'
            />
            <figcaption className='places__card-title'>Sapporo</figcaption>
            <a href='!' className='places__card-link'></a>
          </figure>

          <figure className='places__card places__card_size_sm '>
            <img
              src={five}
              alt='Kyoto'
              className='places__card-pic places__card-pic_size-sm'
            />
            <figcaption className='places__card-title'>Kyoto</figcaption>
            <a href='!=' className='places__card-link'></a>
          </figure>
        </div>
      </div>
    </div>
  )
}
