import React, { Component } from "react";
import MarkerMap from "./MarkerMap";
import Card from './Card'

class Main extends Component {
  constructor(props) {
    super(props);
    this.switchFunction = this.switchFunction.bind(this);
    this.state = {
      isMap: false
    };
  }

  switchFunction = () => {
    this.setState({ isMap:  !this.state.isMap});
  };

  render() {
    const isMap = this.state.isMap;
    let view;
    if (isMap){
        view = <MarkerMap></MarkerMap>
    }
    else{
        view = <Card></Card>
    }
    return (
      <div>
        <button onClick = {this.switchFunction}>Cards </button>
        <button onClick={this.switchFunction} >Map</button>
        <section>{view}</section>
      </div>
    );
  }
}

export default Main;
