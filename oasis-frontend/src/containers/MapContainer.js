import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import logo from './oasis.logo1.png'

export class MapContainer extends Component {

    state = {
        pins: [],
        showingInfoWindow: false,  
        activeMarker: {},          
        selectedPlace: {}   
      };

    componentDidMount() {
      fetch('http://localhost:3000/api/v1/rooftop_parks')
      .then(resp => resp.json())
      .then( pins => this.setState({pins: pins}))
    }
    
    onMarkerClick = (props, marker, e) =>
     
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  makePins = () => {
    return this.state.pins.map(pin => {
      return <Marker icon={{
        url: logo}} 
        onClick={this.props.sortCard} name={pin.name} key={pin.id} pin={pin}
        position={{ lat: pin.lat, lng: pin.lng }}
      />
    })
  }

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
      <Map
        google={this.props.google}
        zoom={5.5}
        initialCenter={
          {
            lat: 42.332108,
            lng: -122.864674
          }
        }
      >
      {this.makePins()}
      <InfoWindow
        
        selectedPlace={this.state.selectedPlace}
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
        >
        
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCImv_H9oVXgnaabNXsR9jzrwWcOHiXH_g'
})(MapContainer);
