import React from 'react'
import Images from './images.json'
//Put images in .json file 
//import images from .json file
//Map through images(array) to display 

// display: inline-block

const Cards = () => {
  return (
    <div className='ui three column grid'>
      <div className='column'>
        <div className='ui fluid card'>
          <div className='image'>
            {Images.map((imageDetail, index) => {
              return <img alt='game'
                src={imageDetail.image} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cards
