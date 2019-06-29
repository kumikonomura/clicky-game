import React from 'react'

const Characters = props => {
  return (

    <div className='ui grid container' style={{ margin: '20px' }}>

      {props.imgArr.map((image, index) => {
        return (
          <div
            onClick={() => props.clickHandler(index)}
            className='ui four wide column'>
            <img alt='game' style={{ maxWidth: '100%', maxHeight: '100%' }} src={image} />
          </div>
        )
      })}

    </div>

  )
}

export default Characters
