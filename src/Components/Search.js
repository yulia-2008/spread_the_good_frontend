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
                    <input id="seacrh-input" type="text"
                        placeholder={"Search posts by city"}
                        onChange={this.changeHandler}
                        value={this.state.search}
                    />                   
                      <button className="button" type='submit'>Search</button>                    
                </form> 
  
            </div>
            
        );
    }
}

export default Search;

