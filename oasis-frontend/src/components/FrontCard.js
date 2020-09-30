import React, { Component } from 'react';
import StarRating from './StarRating';

class FrontCard extends Component {

    // state = {
    //     favorite: false,
    // }

    // onSelectFavorite = () => {
    //     this.setState(prevState => ({
    //         favorite: !prevState.favorite
    //     }));
    // }

   
    render() {
        const { name, photo, address, zipcode, city, state } = this.props.park;
        return (
            <div className="text-center font-weight-light" id='frontCard'>
                <div className="mt-3">
                    <h5>{name}</h5>
                </div>
                <div className="mt-3">
                        
                        <img alt="rooftop bar" src={photo} style={{ width: '100%' }} />
                </div>
                <div className="mt-3">
                    <StarRating
                        // onSelectFavorite={this.onSelectFavorite}
                        favorites={this.props.favorites} addFavorite={this.props.addFavorite} park = {this.props.park}
                    />
                    <div>{address}</div>
                    <div> {city.name}, {state} {zipcode} </div>
                </div>
            </div>
        );
    }
}

export default FrontCard;