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
        favorites: [],
        users : [],
        center: {
            lat: 1, 
            lng: 1
        }
          


    }


    componentDidMount() {
        fetch('http://localhost:3000/api/v1/users')
        .then(resp => resp.json())
        .then(users => this.setState({users: users, center: this.theCenter(users)}));
        
        
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
        // console.log(card)
        this.setState({
            parks: card
        })
    }

    theCenter= (users) => {
        
        let user = users.filter(user => user.username == sessionStorage.Login)
        console.log("sup",user)
        if(user[0].city.id == 2) {
          this.setState({
            center : {
              lat: 40.608013,
              lng: -122.335167
            }
          })
        } else {
          this.setState({
            center : {
              lat: 37.787682,
              lng: -122.420778
            }
          })
        } 
        // console.log(this.state.center)
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
        console.log("render")
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
                    <MapContainer  parks={this.state.parks} sortCard={this.sortCard} users ={this.state.users} center = {this.state.center}/>
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
