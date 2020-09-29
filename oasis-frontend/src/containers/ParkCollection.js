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
                            <div className="ml-5 mb-3" key={park.id}>
                                <Flippy 
                                    flipOnClick={true}
                                    style={{ width: '300px' }}
                                >
                                <FrontSide
                                    style={{ backgroundColor: '#ffffff' }}>
                                    <FrontCard 
                                        park={park} 
                                        onSelectFavorite={this.props.onSelectFavorite}
                                        onRemoveFavorite={this.props.onRemoveFavorite}
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