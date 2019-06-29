import React from 'react'
import Characters from './components/Characters/Characters'
// npm package called shuffle-array
import shuffle from 'shuffle-array'
import NavBar from './components/NavBar/NavBar'
import './App.css'
class App extends React.Component {
  state = {
    imgArr: [
    'http://cdn3.whatculture.com/images/2018/11/e46c3d8de0c01966-600x338.jpg',
    'https://brobible.files.wordpress.com/2018/10/best-of-dwight-schrute-the-office-compilation.jpg?quality=90&w=650&h=431',
    'https://i.pinimg.com/originals/4d/91/41/4d91415c47c22ef283bdcb4091c83d34.png',
    'https://pbs.twimg.com/profile_images/836692529085038592/Xn0WlJly.jpg',
    'https://img.buzzfeed.com/buzzfeed-static/static/2015-09/11/15/campaign_images/webdr01/angela-martin-the-office-2-18192-1441999710-8_dblbig.jpg',
    'https://vignette.wikia.nocookie.net/theoffice/images/e/ec/Kevin3.jpg/revision/latest/scale-to-width-down/220?cb=20140726053223',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrg-Kc9IWMTzf-kKcNGvF_2mIOvTma6yoF24JN7qOkv6dT7D7wBg',
    'https://cimg.tvgcdn.net/i/2006/12/14/b0a171bc-23fb-4ba1-afb7-177bdd4950ca/e7c4474472f1a83add371bb292e645d8/963037D3-8E9C-44C4-ABBA-52A07FD1F843.jpg',
    'https://img.buzzfeed.com/buzzfeed-static/static/2016-06/21/18/asset/buzzfeed-prod-fastlane02/sub-buzz-25304-1466549031-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*',
    'https://imgix.bustle.com/uploads/image/2017/12/20/e0364c80-0232-49bf-a37d-12d1e4a67940-screen-shot-2017-12-19-at-94303-pm.png?w=960&h=540&fit=crop&crop=faces&auto=format&q=70',
    'https://vignette.wikia.nocookie.net/theoffice/images/d/d9/Blondryan.jpg/revision/latest/scale-to-width-down/247?cb=20181107223529',
    'https://cimg.tvgcdn.net/i/2007/05/10/286866da-4399-44a0-b806-ed9cd5f702c8/d4144e3ba8e7884bdefdf59152329e0f/A53B14BC-294C-4F7B-965C-A5A98F337639.jpg',
    ],
    selected: [],
    score: 0,
    topScore: 0
  }
  // This function will shuffle the cards, WORKING!!
  handleShuffleCards = _ => {
    let imgArr = this.state.imgArr
    shuffle(imgArr)
    this.setState({ imgArr })
  }
  // This function will handle the different conditions
  // selectedCard is the index number of the card
  handleClick = selectedCard => {
    // imgUrl variable equals the index of each image in the imgArr
    const imgUrl = this.state.imgArr[selectedCard]
    console.log(this.state.selected)

    // this condition checks if the imgUrl can be found in the selected array
    if (this.state.selected.indexOf(imgUrl) < 0) {
      // this block of code runs when imgUrl was not found in the selected array
      this.setState({ 
        selected: [...this.state.selected, imgUrl],
        score: this.state.score + 1,
        topScore: Math.max(this.state.score + 1, this.state.topScore)      
      })
      // imgArr: shuffle your new images array
      this.handleShuffleCards(selectedCard)
    } else { // if imgUrl WAS found in the selected array
      // reset state
      this.setState({ 
        selected: [],
        score: 0
      })
      // notify user of loss
      window.alert('you lose')
    }
    //function to check if card has been selected already  
    //if not 
      //logic for marking card as selected
    //if so
      //logic for losing 
    //call handleShuffleCards
  }

  render () {
    return (
      <>
      <NavBar 
      score={this.state.score}
      topScore={this.state.topScore}
      />
      <Characters 
      imgArr={this.state.imgArr}
      clickHandler={this.handleClick}
      />
      </>
    )
  }
}

export default App
