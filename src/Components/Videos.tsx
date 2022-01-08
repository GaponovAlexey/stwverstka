import React from 'react'

export const Videos = () => {
  return (
    <div className='videos'>
      <div className='videos__wrapper'>
        <div className='video__item'></div>
        <iframe
          className='video__element'
          src='https://www.youtube.com/embed/D48T0wNm96w'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
    </div>
    
  )
}
