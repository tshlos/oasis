import React, { Component } from 'react';
import FrontCard from '../components/FrontCard';
import BackCard from '../components/BackCard';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class ParkCollection extends Component {

    render() {
        return (
            <div>
                <div>
                    {this.props.parks.map(park => {
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
                                        addFavorite={this.props.addFavorite}
                                        onSelectFavorite={this.props.onSelectFavorite}
                                        
                                    />
                                </FrontSide>
                                <BackSide
                                    style={{ backgroundColor: '#ffffff' }}>
                                    <BackCard 
                                        park={park} 
                                        // onReviewClick={this.props.onReviewClick}
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
}

export default ParkCollection;