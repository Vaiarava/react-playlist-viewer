import React, { Component,  } from 'react';

import List from "List"
import Item from 'Item'
import Input from "Input"

/*const kinds = {
  rap: {name:"Rap"},
  rock: {name:"Rock"},
  electro: {name:"Electro"}
}*/



/*const kindsArray = Object.keys(kinds).map((k) => {return kinds[k]});*/

export default class App extends Component {

  state = {
    artists: []//,
    //kindsArray: []
  };

  componentDidMount() {
    fetch ("https://api.spotify.com/v1/search?query=lady&type=artist").then ((response)=> {
      response.json().then((data)=> {
        if(!data.error)
console.log(data)
        {
          this.setState({
            artists: data.artists.items//,
            //kindsArray: data.artists.items[1].genres
          })
        //  console.log (data.artists.items)

        }
      })
    });
  }

  render() {
    //console.log (this.state.kindsArray)
    return (
      <div>
        <List title= "Artist" items={this.state.artists}/>

        //<List title= "Kind" items={this.state.kindsArray}/>

     </div>)
    }
}
