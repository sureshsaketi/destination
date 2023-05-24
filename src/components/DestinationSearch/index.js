import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInputValue: ''}

  onChangeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInputValue} = this.state
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name
        .toLowerCase()
        .includes(searchInputValue.toLowerCase()),
    )
    console.log(searchInputValue)
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <input
          type="search"
          placeholder="Search"
          value={searchInputValue}
          onChange={this.onChangeSearchInput}
        />
        <ul className="countries-container">
          {searchResults.map(eachDestination => (
            <DestinationItem destinationsList={eachDestination} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
