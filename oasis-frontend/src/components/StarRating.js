import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    let [rating, setRating] = useState(null);
    let [hover, setHover] = useState(null);
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                let ratingValue = i + 1;
                
                return (
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)}
                            />
                        <FaStar 
                            className="star" 
                            size={20} 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    )
}

export default StarRating