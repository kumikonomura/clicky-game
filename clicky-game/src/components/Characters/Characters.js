import React from 'react'
class Characters extends React.Component {
  handleImageClick (index) {
    this.props.clickHandler(index)
  }
  render () {
    const { imgArr } = this.props
    return (

      <div className='ui grid container'>

        {imgArr.map((image, index) => {
          return (
            <div
              onClick={this.handleImageClick.bind(this, index)}
              className='image four wide column'>
              <img alt='game' style={{ maxWidth: '100%' }} src={image} />
            </div>
          )
        })}

      </div>

    )
  }
}

export default Characters
