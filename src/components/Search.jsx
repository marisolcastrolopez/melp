import React, { Component } from "react";
import "../style/main.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
  }

  handleChange = event => {
    const value = event.target.value;

    this.props.eventSearch(value);
  };

  render() {
    //console.log(this.state.dataFiltered);
    return (
      <div className="searchinput">
        <input
          className="searchinput"
          type="text"
          placeholder="Search.."
          value={this.props.searchQuery}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default Search;
