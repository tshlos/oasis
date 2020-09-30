import React, { Component } from 'react';
import ParkCollection from './ParkCollection';
import MapContainer from './MapContainer';
import StarRating from '../components/StarRating';

const parksURL = 'http://localhost:3000/api/v1/rooftop_parks';

class ParkContainer extends Component {

    state = {
        parks: [],
    }

    componentDidMount() {
        fetch(parksURL)
            .then(resp => resp.json())
            .then(parks => this.setState({ parks: parks })
            );
    }

    onRemoveFavorite = (card) => {
        this.setState(prevState => {
            return {
                favorite: prevState.favorite.filter(i => i !== card)
            }  
        });
    }


    render() {
        return (
            <div className="app-grid">
                <div>
                    <ParkCollection 
                        parks={this.state.parks} 
                        onRemoveFavorite={this.onRemoveFavorite}
                    /> 
                    <StarRating favorite={this.state.favorite}/>
                </div>
                <div >
                    <MapContainer /> 
                </div>
            </div>
        );
    }
}

export default ParkContainer;
