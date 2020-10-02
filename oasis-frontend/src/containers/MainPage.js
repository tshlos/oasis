import React, {Component} from 'react';
import MapContainer from './MapContainer'
import ParkContainer from './ParkContainer'


class MainPage extends Component {
    render() {
        return (
          <div>
            <MapContainer/>
            <ParkContainer/>
          </div>
        )
    }
}

export default MainPage
