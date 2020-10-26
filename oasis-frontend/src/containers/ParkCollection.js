import React, { Component } from 'react';
import FrontCard from '../components/FrontCard';
import BackCard from '../components/BackCard';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const ParkCollection = (props) => {
    return (
        <div>
            <div className="fav-header"><h4>Parks</h4></div>
            <div>
                {props.parks.map(park => {
                    return (
                        <div className="ml-5 mb-3" park={park} key={park.id} >
                            <Flippy 
                                flipOnClick={true}
                                style={{ width: '300px' }}
                            >
                            <FrontSide
                                style={{ backgroundColor: '#ffffff' }}>
                                <FrontCard 
                                    park={park} key={park.id} 
                                    addFavorite={props.addFavorite}
                                    removeFavorite={props.removeFavorite}
                                    onSelectFavorite={props.onSelectFavorite}
                                />
                            </FrontSide>
                            <BackSide
                                style={{ backgroundColor: '#ffffff' }}>
                                <BackCard 
                                    park={park} 
                                />
                            </BackSide>
                            </Flippy>
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ParkCollection;