import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: "",
        cities: ""
    }

    changeHandler = e => {
        this.setState({search: e.target.value})  
        this.state.search.length >= 4 ? 
        fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&offset=0&namePrefix=${this.state.search}`, {
              method: "GET",
              headers: {
             "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
             "x-rapidapi-key": process.env.REACT_APP_SPREAD_THE_GOOD_FRONTEND_API_KEY
             } 
        })
       .then(resp => resp.json())
       .then(resp => {this.setState({cities: resp}) })
       : console.log("menshe 5")         
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.searchHandler(this.state.search)
    }

      cities=()=> this.state.cities.data.map((c)=>  <p>{c.city}, {c.region}, {c.country}</p> )

    render() {
        return (   console.log("search:",this.state),
            <div id="search-container">
                <form onSubmit={this.submitHandler}>
                    <input  
                        type="text"
                        placeholder={"Search for city"}
                        onChange={this.changeHandler}
                        value={this.state.search}
                    />
                    <button type='submit'>search</button>
     {this.state.cities.data  ?  <>{this.cities()}</> :null} 
    
                </form>  
            </div>
            
        );
    }
}

export default Search;
