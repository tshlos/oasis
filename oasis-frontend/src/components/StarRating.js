import React from 'react';
import { FaStar } from 'react-icons/fa';


const StarRating = (props) => {

    // const onClick = (e) => {
    //     e.stopPropagation();
    //     if (props.onSelectFavorite) {
    //         props.onSelectFavorite(props.park);
    //     } else {
    //         props.onRemoveFavorite(props.park);
    //     }
    //     return false;
    // }

    return (
        <div > 
            {/* {console.log(props)}     */}
            <FaStar 
               
                onClick={() => props.addFavorite(props.park)}
                className="star" 
                size={20} 
                color={props.favorite ? "#ffc107" : "#e4e5e9"}
            />
        </div>
    );
}

export default StarRating