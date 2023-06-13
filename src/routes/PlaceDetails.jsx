import { useParams } from 'react-router-dom'
const PlaceDetails = () => {
  const { id } = useParams();
  return (
    <div>The id of the place is: { id }</div>
  )
}

export default PlaceDetails