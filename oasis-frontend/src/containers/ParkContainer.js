import React, { Component } from 'react';
import ParkCollection from './ParkCollection';
import MapContainer from './MapContainer';
import FavContainer from './FavContainer'

const parksURL = 'http://localhost:3000/api/v1/rooftop_parks';

class ParkContainer extends Component {

    state = {
        allParks: [],
        parks: [],
        favorites: [],
    }

    componentDidMount() {
        fetch(parksURL)
            .then(resp => resp.json())
            .then(parks => this.setState({ parks: parks, allParks: parks })
            );
    }

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

    handleRemove = (id) => {
        console.log('id', id)
        this.state.parks.filter(park => {
            return park.id !== id
        })
    }

    render() {
        return (
            <div className="app-grid">
                <div>
                    {this.state.favorites.length !== 0 && 
                    <FavContainer parks={this.state.parks} 
                        favorites={this.state.favorites} 
                        addFavorite={this.addFavorite} 
                        removeFavorite={this.removeFavorite}
                        handleRemove={this.handleRemove}
                    />} 
                    <ParkCollection
                        parks={this.state.parks}
                        addFavorite={this.addFavorite}
                        removeFavorite={this.removeFavorite}
                    />
                </div>
                <div className="map">
                    <MapContainer parks={this.state.parks} sortCard={this.sortCard} />
                </div>
            </div>
        );
    }
}

export default ParkContainer;
