import React, { Component } from 'react';
import ParkCollection from './ParkCollection';
import MapContainer from './MapContainer';
import StarRating from '../components/StarRating';
import FavContainer from './FavContainer'

const parksURL = 'http://localhost:3000/api/v1/rooftop_parks';

class ParkContainer extends Component {

    state = {
        allParks: [],
        parks: [],
        favorites: []
    }


    componentDidMount() {
        fetch(parksURL)
            .then(resp => resp.json())
            .then(parks => this.setState({ parks: parks, allParks: parks })
            );
    }

    // onRemoveFavorite = (card) => {
    //     this.setState(prevState => {
    //         return {
    //             favorite: prevState.favorite.filter(i => i !== card)
    //         }
    //     });
    // }

    sortCard = (e) => {
        let card = this.state.allParks.filter(park => park.id === e.pin.id)
        console.log(card)
        this.setState({
            parks: card
        })
    }

    addFavorite = (fav) => {
        if (!this.state.favorites.includes(fav))
            this.setState({
                favorites: [...this.state.favorites, fav]
            })
    }

    removeFavorite = (favToBeRemoved) => {
        let newFavorites = this.state.favorites.filter(favItem => favItem !== favToBeRemoved)
        this.setState({favorites: newFavorites})
    }
    render() {
        return (
            <div className="app-grid">
                <div>
                    <ParkCollection
                        parks={this.state.parks}
                        addFavorite={this.addFavorite}
                        // onReviewClick={this.onReviewClick}
                        removeFavorite={this.removeFavorite}
                    />
                </div>
                <div className="map">
                    <MapContainer parks={this.state.parks} sortCard={this.sortCard} />
                </div>
                <div>
                    <FavContainer parks={this.state.parks} 
                    favorites={this.state.favorites} 
                    addFavorite={this.addFavorite} 
                    removeFavorite={this.removeFavorite}
                    />
                </div>
            </div>
        );
    }
}

export default ParkContainer;
