import React from 'react'
// import Images from './images.json'
//Map through images(array) to display 

// display: inline-block

// class Characters extends React.Component {

//   render () {

//     let imgDiv = []

//     //Map through images 
//     //Push into imgDiv array (dynamic html elements)

//     return (
//       <div className='ui three column grid'>
//         //For loop 3 times 
//         <div className='column'>
//           //for loop 4 times
//           <div className='ui fluid card'>
//             <div className='image'>
//               {Images.map((imageDetail, index) => {
//                 return <img alt='game'
//                   src={imageDetail.image} />
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// export default Characters

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
            <div onClick={this.handleImageClick.bind(this, index)} className='image four wide column'> <img alt='game' style={{ maxWidth: '100%' }} src={image} /></div>
          )
        })}

      </div>

    )
  }
}

export default Characters
