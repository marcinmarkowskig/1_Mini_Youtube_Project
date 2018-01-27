import React, {Component} from 'react'

class SearchBar extends Component {
  constructor (props) {
    super (props);

    this.state = {term:''};
  }


  render() {
    return (
      <div className="search-bar">
      <input
        value = {this.state.term}
         onChange = {event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
//musi byc napisane </input /> -
// tylko w ten sposob zadziala SearchBar, w koncu cos wpisujemy do wyszukiwarki
export default SearchBar;
