import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./CurrentLocationMap";

const mapStyles = {
  width: "50%",
  height: "50%"
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker
          onClick={this.onMarkerClick}
          name={"Tacos Doña María"}
          position={{ lat: 20.6736, lng: -103.344 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Tortas"}
          position={{ lat: 20.6436, lng: -103.324 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Tamales"}
          position={{ lat: 20.6436, lng: -103.329 }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBrKMm2g8gMfsU_JtKF6fkgdtw1ED3ShgU"
})(MapContainer);
