import React, { Component } from 'react';
import ParkCollection from './ParkCollection';
import MapContainer from './MapContainer';

const parksURL = 'http://localhost:3000/api/v1/rooftop_parks';

class ParkContainer extends Component {

    state = {
        parks: [],
            
    }

    componentDidMount() {
        fetch(parksURL)
            .then(resp => resp.json())
            .then(parks => this.setState({ parks: parks })
            )
    }


    onReviewClick = () => {
        console.log('on review click')
    }


    render() {
        return (
            <div className="app-grid">
                <div>
                    <ParkCollection 
                        parks={this.state.parks} 
                        onReviewClick={this.onReviewClick} 
                    /> 
                </div>
                <div > 
                    <MapContainer /> 
                </div>
            </div>
        )
    }
}

export default ParkContainer
