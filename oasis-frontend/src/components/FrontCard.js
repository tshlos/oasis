import React from 'react';
import StarRating from './StarRating';

const FrontCard = (props) => {
   
    const { name, photo, address, zipcode, city, state } = props.park;
    return (
        <div className="text-center font-weight-light" id='frontCard'>
            <div className="mt-3">
                <h5>{name}</h5>
            </div>
            <div className="mt-3">
                    
                    <img alt="rooftop bar" src={photo} style={{ width: '100%' }} onClick={() => props.removeFavorite(props.park)}/>
            </div>
            <div className="mt-3">
                <StarRating
                    favorites={props.favorites} 
                    addFavorite={props.addFavorite}
                    park = {props.park}
                />
                <div>{address}</div>
                <div> {city.name}, {state} {zipcode} </div>
            </div>
        </div>
    );
}

export default FrontCard;