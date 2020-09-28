import React from 'react';
import StarRating from './StarRating'

const FrontCard = (props) => {
    const { name, photo, address, zipcode, city, state } = props.park;
    return (
        <div className="text-center font-weight-light">
            <div className="mt-3">
                <h5>{name}</h5>
            </div>
            <div className="mt-3"> 
                <img alt="rooftop bar" src={photo} style={{ width: '300px', height: '250px' }} />
            </div>
            <div className="mt-3"> 
        <StarRating />
                <div>{address}</div>
                <div> {city.name}, {state} {zipcode} </div>
            </div>
        </div>
  

    )
}

export default FrontCard