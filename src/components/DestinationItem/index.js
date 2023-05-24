// Write your code here
import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li>
      <img src={imgUrl} className="image" alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationSearch
