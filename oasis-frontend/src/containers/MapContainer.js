import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

// let iconMarker = 
const mapStyles = {
  width: '32%',
  height: '85%'
};

export class MapContainer extends Component {

    state = {
        pins: [],
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };
// grabs all locations
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


// pinClick = (pin) => {
//   // debugger
//   console.log(this)
//   // console.log(pin)
//   this.setState({selectedPlace: pin,
//     activeMarker: pin,
//     showingInfoWindow: true
//   // debugger
// })
// }

  makePins = () => {
    return this.state.pins.map(pin => {
      return <Marker onClick={this.props.sortCard} name={pin.name} key={pin.id} pin={pin}
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
        zoom={14}
        style={mapStyles}
        initialCenter={

          // at some point well need a if else statement to determine if the user is in SF or SEA
          {
            lat: 47.608013,
            lng: -122.335167
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
