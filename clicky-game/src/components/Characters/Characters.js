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
  render () {
    const { imgArr } = this.props
    return (
      <div className='ui three column grid'>
        <div className='column'>
          <div className='ui fluid card'>
            <div className='image'>
              {imgArr.map(image => {
                return <img alt='card' src={image} />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Characters
