import React from 'react'
import './Characters.css'

const Characters = props => {
  return (

    <div className='ui grid container' style={{ margin: '50px' }}>

      {props.imgArr.map((image, index) => {
        return (
          <div
            onClick={() => props.clickHandler(index)}
            className='ui four wide column'>
            <img id='office_pictures' alt='game' style={{ maxWidth: '100%', maxHeight: '100%' }} src={image} />
          </div>
        )
      })}

    </div>

  )
}

export default Characters
