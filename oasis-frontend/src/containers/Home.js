import React from 'react';
import title from './title.png'
import logo from './oasis.logo.png'


const Home = () => {
    return (
        <div className = "home">
            <h1 id="title"><img src = {title} alt = 'title' id='title'></img></h1>
            <h4 id="subtitle"> Your source for free rooftop access in San Francisco and Seattle </h4>
            <p id="body">This site was created with the direct intent to allow, you the user, direct access to those hard to reach and often times hidden locations within your own city. With Oasis, rooftop access is just a couple clicks away. Navigate to Rooftop parks to view parks near you, add them to your favorites and more.</p>
            <img src= {logo} id= 'home-page-logo'></img>
        </div>

    )
}

export default Home
