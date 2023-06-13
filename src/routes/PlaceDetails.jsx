import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
const PlaceDetails = () => {
  const { id } = useParams();
  const place = useSelector(state => state.places.find(item => item.id === parseInt(id) ));
  return (
    <div>The id of the place is: { place.photo}</div>
  )
}

export default PlaceDetails