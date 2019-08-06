import React, { Component } from "react";
import {
  MDBIcon,
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBCol
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import MarkerMap from "./MarkerMap";
import Cards from "./Cards";
import Search from "./Search";
import "../style/main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.switchToCards = this.switchToCards.bind(this);
    this.switchToMap = this.switchToMap.bind(this);
    this.state = {
      isMap: false,
      collapse: false,
      searchQuery: "",
      places: []
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  switchToMap = () => {
    this.setState({ isMap: true });
  };

  switchToCards = () => {
    this.setState({ isMap: false });
  };

  handlerSearch = text => {
    this.setState({ searchQuery: text });
  };

  // function for dynamic sorting
  compareValues(key, order = "asc") {
    return function(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order == "desc" ? comparison * -1 : comparison;
    };
  }

  componentDidMount() {
    fetch("https://melp-backend.herokuapp.com/places")
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            places: data.places
          },
          () => console.log("places", this.state.places)
        );
      });
  }

  render() {
    const bgPink = { backgroundColor: "#292929", paddingTop: `${1}rem` };
    const isMap = this.state.isMap;
    let view;
    const filteredPlaces = this.state.places.filter(i =>
      new RegExp(this.state.searchQuery, "i").exec(JSON.stringify(i))
    );

    const sortedPlaces = filteredPlaces.sort(
      this.compareValues("rating", "desc")
    );
    if (isMap) {
      console.log(sortedPlaces);
      view = <MarkerMap data={sortedPlaces} />;
    } else {
      console.log(sortedPlaces);
      view = <Cards data={sortedPlaces} />;
    }
    return (
      <div>
        <header>
          <div>
            <Router>
              <header>
                <MDBNavbar
                  style={bgPink}
                  dark
                  expand="md"
                  scrolling
                  fixed="top"
                >
                  {/* <MDBNavbarBrand href="/">
                    <p>Brand</p>
                  </MDBNavbarBrand> */}
                  <Search
                    className="searchinput"
                    style={{ marginTop: `${2.5}rem` }}
                    searchQuery={this.state.searchQuery}
                    eventSearch={this.handlerSearch}
                  />
                  <MDBNavbarToggler onClick={this.onClick} />
                  <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav left>
                      <MDBNavItem active>
                        <MDBNavLink to="#">Home</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">Features</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">Pricing</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">Options</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                      <MDBNavItem>
                        <MDBNavLink to="#">
                          <MDBIcon fab icon="facebook-f" />
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">
                          <MDBIcon fab icon="twitter" />
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">
                          <MDBIcon fab icon="instagram" />
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBNavbar>
              </header>
            </Router>
          </div>
        </header>
        <div style={{ paddingTop: 80 }}>
          <button onClick={this.switchToCards}>Cards </button>
          <button onClick={this.switchToMap}>Map</button>
        </div>
        <section>{view}</section>
        <footer>
          <div />
          <MDBContainer className="navbarbottom">
            <MDBRow>
              <MDBCol>
                <a href="#home" className="active">
                  Home{" "}
                  <MDBIcon
                    style={{ display: "block", marginTop: `${0.2}rem` }}
                    icon="home"
                    size="2x"
                  />
                </a>
              </MDBCol>
              <MDBCol>
                {" "}
                <a href="#news">
                  Add Place{" "}
                  <MDBIcon
                    style={{ display: "block", marginTop: `${0.2}rem` }}
                    icon="plus-circle"
                    size="2x"
                  />
                </a>
              </MDBCol>
              <MDBCol>
                <a href="#contact">
                  Saved{" "}
                  <MDBIcon
                    style={{ display: "block", marginTop: `${0.2}rem` }}
                    icon="bookmark"
                    size="2x"
                  />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </footer>
      </div>
    );
  }
}
export default Main;
