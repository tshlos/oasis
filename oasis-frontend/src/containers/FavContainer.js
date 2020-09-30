import React, { Component } from 'react';
import FrontCard from '../components/FrontCard'
import BackCard from '../components/BackCard';
import Flippy, { FrontSide, BackSide } from 'react-flippy';



class FavContainer extends Component{
    // renderFavorites = () => {
    //     return this.props.favorites.map(favorite => {
    //        return <FrontCard park={favorite} key={favorite.id} addFavorite={this.props.addFavorite}  />
    //    })
    //    }

    

    render(){
        // return (
        //  <div>
        //     {this.renderFavorites()}
        // </div>
        // )

        return (
            <div>
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
                                        
                                    />
                                </FrontSide>
                                <BackSide
                                    style={{ backgroundColor: '#ffffff' }}>
                                    <BackCard 
                                        park={favorite} 
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


export default FavContainer;