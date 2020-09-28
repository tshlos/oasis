import React, { Component } from 'react';
import FrontCard from '../components/FrontCard'
import BackCard from '../components/BackCard'
import Flippy, { FrontSide, BackSide } from 'react-flippy';


class ParkCollection extends Component {

    render() {
        return (
            <div>
                <div>
                    {this.props.parks.map(park => {
                        return (
                            <div> 
                                <Flippy
                                    flipOnHover={false} 
                                    flipOnClick={true}
                                    flipDirection="horizontal" 
                                    ref={(r) => this.flippy = r}
                                    style={{ width: '400px', height: '450px' }}
                                >
                                <FrontSide
                                    style={{ backgroundColor: '#ffffff' }}>
                                    <FrontCard 
                                        key={park.id} 
                                        park={park} 
                                    />
                                </FrontSide>
                                <BackSide
                                    style={{ backgroundColor: '#ffffff' }}>
                                    <BackCard 
                                        park={park} 
                                        onReviewClick={this.props.onReviewClick}
                                    />
                                </BackSide>
                                </Flippy>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ParkCollection