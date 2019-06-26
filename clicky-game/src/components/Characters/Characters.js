import React from 'react'

const Characters = props => {
  return (

    <div className='ui grid container'>

      {props.imgArr.map((image, index) => {
        return (
          <div
            onClick={() => props.clickHandler(index)}
            className='image four wide column'>
            <img alt='game' style={{ maxWidth: '100%' }} src={image} />
          </div>
        )
      })}

    </div>

  )
}

export default Characters
