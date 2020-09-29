import React, { Component } from 'react';
import ParkCollection from './ParkCollection';
import MapContainer from './MapContainer';
import StarRating from '../components/StarRating';

const parksURL = 'http://localhost:3000/api/v1/rooftop_parks';

class ParkContainer extends Component {

    state = {
        allParks: [],
        parks: [],
    }

 
    componentDidMount() {
        fetch(parksURL)
            .then(resp => resp.json())
            .then(parks => this.setState({ parks: parks, allParks: parks })
            );
    }

    onRemoveFavorite = (card) => {
        this.setState(prevState => {
            return {
                favorite: prevState.favorite.filter(i => i !== card)
            }  
        });
    }


    // onReviewClick = () => {
    //     console.log('on review click')
    // }

sortCard= (e) => {
let card = this.state.allParks.filter(park => park.id === e.pin.id)
console.log(card)
this.setState({ 
    parks : card
})

} 

    render() {
        return (
            <div className="app-grid">
                <div>
                    <ParkCollection 
                        parks={this.state.parks} 
                        onRemoveFavorite={this.onRemoveFavorite}
                        // onReviewClick={this.onReviewClick} 
                    /> 
                    <StarRating favorite={this.state.favorite}/>
                </div>
                <div >
                    <MapContainer parks = {this.state.parks} sortCard ={this.sortCard}/> 
                </div>
            </div>
        );
    }
}

export default ParkContainer;
