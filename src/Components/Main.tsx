import React from 'react'
import { Benefits } from './Benefits'
import { Places } from './Places'
import { TopPlaces } from './TopPlaces'
import { Ture } from './Ture'

export const Main = () => {
  return (
    <div>
      <main className='main'>
        <section className='intro'>
          <div className='wrapper'>
            <h1 className='intro__title'>Discover Amazing places in Japan</h1>
            <p className='intro__subtitle'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this if i had the energy but under the bed, for attack the
              child, open the door,
            </p>
            <form className='search__form'>
              <p className='form__info'>
                <input
                  type='text'
                  className='search__form-field'
                  placeholder='What would you like to do?'
                />
                <input
                  type='text'
                  className='search__form-field'
                  placeholder='Where would you like to go?'
                />
                <button className='form__submit'>search</button>
              </p>
            </form>
          </div>
        </section>
        <Benefits />
        <Places />
        <Ture />
        <TopPlaces />
      </main>
    </div>
  )
}
