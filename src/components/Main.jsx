import React, { Component } from "react";
import MarkerMap from "./MarkerMap";
import Cards from './Cards';
import Search from './Search';
import data from "../data/data.json";

class Main extends Component {
 constructor(props) {
   super(props);
   this.switchToCards = this.switchToCards.bind(this);
   this.switchToMap = this.switchToMap.bind(this);
   this.state = {
     isMap: false,
    data: data
   };
 }
 switchToMap = () => {
   this.setState({ isMap:  true});
 };

 switchToCards = () => {
  this.setState({ isMap:  false});
};

handlerSearch = (found) =>{
  this.setState({ data:  (found.length)? found : data});
}

 render() {
 console.log(this.state.data)
   const isMap = this.state.isMap;
   let view;
   if (isMap){
       view = <MarkerMap data={this.state.data}></MarkerMap>
   }
   else{
       view = <Cards data={this.state.data}></Cards>
   }
   return (
     <div>
       <header><Search eventSearch={this.handlerSearch} ></Search></header>
       <button onClick = {this.switchToCards}>Cards </button>
       <button onClick={this.switchToMap} >Map</button>
       <section>{view}</section>
       <footer>Footer</footer>
     </div>
   );
 }
}
export default Main;