import React, { Component } from 'react';
import FrontCard from '../components/FrontCard'
import BackCard from '../components/BackCard';
import Flippy, { FrontSide, BackSide } from 'react-flippy';



class FavContainer extends Component{

    render(){
        return (
            <div>
                <div className="fav-header"><h4>Favorites</h4><p id="remove-fav">(click card to remove favorite)</p></div>
                <div>
                    {this.props.favorites.map(favorite => {
                        return (
                            <div className="ml-5 mb-3" park={favorite} key={favorite.id} >
                                <Flippy 
                                    flipOnClick={true}
                                    style={{ width: '300px' }}
                                >
                                <FrontSide
                                    style={{ backgroundColor: '#ffffff' }}>
                                    <FrontCard 
                                        park={favorite} key={favorite.id} 
                                        addFavorite={this.props.addFavorite}
                                        onSelectFavorite={this.props.onSelectFavorite}
                                        removeFavorite={this.props.removeFavorite}
                                        
                                    />
                                </FrontSide>
                                <BackSide
                                    style={{ backgroundColor: '#ffffff' }}>
                                    <BackCard 
                                        park={favorite} 
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


export default FavContainer;