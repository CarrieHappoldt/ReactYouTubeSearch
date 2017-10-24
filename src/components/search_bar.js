import React from "react";

// functional component or Statless
// const SearchBar = () => {
//   return <input />
// }

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }

  render(){
    return (
      <div className="search-bar">
        {/* <input onChange={event => this.setState({ term: event.target.value })} /> */}
        <input 
        value={this.state.term} 
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
    // return <input onChange={this.onInputChange}/> //input with an event handler
    // return <input onChange={ event => console.log(event.taget.value)} 
  }

  //event handler
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;