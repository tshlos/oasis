import React, { Component } from 'react';

class CityChooser extends Component {

    state = {
        cities: [],
    }

    async componentDidMount() {
        const resp = await fetch('http://localhost:3000/api/v1/cities');
        const cities = await resp.json();
        this.setState({
            cities
        })
    }


    render() {
        return (
            <select onChange={this.props.onChange} name="city_id" id="city"> 
                <option value="choose a city" > Choose a City </option>
                {this.state.cities.map(city => <option value={city.id}>{city.name}</option>)}
            </select>
        );
    }
}

export default CityChooser