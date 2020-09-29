import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import FrontCard from './FrontCard';


const StarRating = (props) => {

    return (
        <div >     
            <FaStar 
                onClick={() => {props.onSelectFavorite ? props.onSelectFavorite(props.park) : props.removeFavorite(props.park)}}
                className="star" 
                size={20} 
                color={props.favorite ? "#ffc107" : "#e4e5e9"}
            />
        </div>
    )
}

export default StarRating