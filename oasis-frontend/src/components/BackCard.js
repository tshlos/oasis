import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BackCard = (props) => {
    const {name, description} = props.park
    return (
        <div > 
            <div className="mt-3"> 
            <div class="font-weight-light text-center">
                <div><h5>{name}</h5></div>
                <div>{description}</div>
                <div className="mt-4"> 
                    {/* <button onClick={props.onReviewClick}>Reviews</button> */}
                </div>
            </div>
            </div>
        </div>
    )
}

export default BackCard
