import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: ""
    }

    changeHandler = e => {
        this.setState({search: e.target.value})         
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.searchHandler(this.state.search)
       
    }

    render() {
        return (  
            <div id="search-container">
                <form onSubmit={this.submitHandler}>
                    <input type="text"
                        placeholder={"Search for city"}
                        onChange={this.changeHandler}
                        value={this.state.search}
                    />                   
                      <button type='submit'>search</button>                    
                </form> 
  
            </div>
            
        );
    }
}

export default Search;

