import React, { Component } from 'react';
import FrontCard from '../components/FrontCard'



export default class FavContainer extends Component{
    renderFavorites = () => {
        return this.props.favorites.map(favorite => {
           return <FrontCard park={favorite} key={favorite.id} addFavorite={this.props.addFavorite}  />
       })
       }

    

    render(){
        return (
         <div>
            {this.renderFavorites()}
        </div>
        )
    }
}
