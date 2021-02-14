import './App.css';
import './style.css';
import Navbar from "./components/Navbar/Navbar";
import { Component } from 'react';
// import brunoball from './images/brunoball.JPG';
// import brunochick from './images/brunochick.jpg';
// import brunohaircut from './images/brunohaircut.jpg';
// import brunoswim from './images/brunoswim.PNG';
// import space from './images/space.jpg';
import DogBoard from "./components/DogBoard";
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  fetchData = () => {
    axios.get("https://api.punkapi.com/v2/beers")
    .then((response) => {
      console.log(response);
      this.setState({data: response.data})
    }).catch((error) => {
      console.log(error)
    })
  }

  renderData = () => {
    if(this.state.data) {
      return(
        <div>
          {this.state.data.map((dict, idx) => {
            return(<div key={idx}>{dict.name}</div>);
          })}
        </div>
      )
    } else {
      return null;
    }
  }

  mainPage = () => {
    const name = "Vico Lee";
    const dartClass = "'24";
    var likes = 0;
    var hobbiesEmojies = {
      'Volleyball': '\&#127952',
      'Hiking': '\&#127956',
      'Golfing': '\&#127948'
    };
  
    var increaseLikes = () => {
      likes = likes + 1;
      console.log("Likes: " + likes);
      return (
        likes
      );
    };
  
  
    const listHobbiesEmojies = Object.entries(hobbiesEmojies).map(([hobby, emoji]) => {
      return (
        <li>{hobby} {emoji}</li>
      );
    })
  
    const font50 = {
      fontSize: 50
    }
  
    return (
      <div>
        <body>
          <div className="mainPage">
            <Navbar />
          </div>
          <div className="site-background">
            <div className="centered-text">
              <h1 style={font50}>{name} {dartClass}</h1>
            </div>
          </div>
          <div>
            <h2>Hobbies</h2>
            <div>
              <ul>
                {listHobbiesEmojies}
              </ul>
            </div>
            <h2>Most important thing in life</h2>
            <div className="gallery">
              <a target="_self" href="/images/brunoball.JPG">
                <img src="/images/brunoball.JPG" width="500" height="500"></img>
              </a>
            </div>
            <div className="gallery">
              <a target="_self" href="/images/brunochick.jpg">
                <img src="/images/brunochick.jpg" width="500" height="500"></img>
              </a>
            </div>
            <div className="gallery">
              <a target="_self" href="/images/brunohaircut.jpg">
                <img src="/images/brunohaircut.jpg" width="500" height="500"></img>
              </a>
            </div>
            <div className="gallery">
              <a target="_self" href="/images/brunoswim.PNG">
                <img src="/images/brunoswim.PNG" width="500" height="500"></img>
              </a>
            </div>
          </div>
          <div>
            <button onClick={increaseLikes}>
              Likes: {likes}
            </button>
          </div>
          <div>
            <DogBoard />
          </div>
          <br></br>
          <div>
          </div>
        </body>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.mainPage()}
        <div> API Testing </div>
        <button onClick = {this.fetchData}>click for beer </button>
        {this.renderData()}
      </div>
    );
  }
}


export default App;
