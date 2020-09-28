import React, { Component } from 'react';
import ParkCollection from './ParkCollection';

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
            <div>
                <ParkCollection 
                    parks={this.state.parks} 
                    onReviewClick={this.onReviewClick} 
                />
            </div>
        )
    }
}

export default ParkContainer
