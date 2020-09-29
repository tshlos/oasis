import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BackCard = (props) => {
    const {name, description} = props.park;
    return (
        <div > 
            <div className="mt-3"> 
            <div className="font-weight-light text-center">
                <div>
                    <h5>{name}</h5>
                </div>
                <div className="mt-3">
                    {description}
                </div>
                <div> 
                    {/* <button onClick={props.onReviewClick}>Reviews</button> */}
                </div>
            </div>
            </div>
        </div>
    );
}

export default BackCard;
