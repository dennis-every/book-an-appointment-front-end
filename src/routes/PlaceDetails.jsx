import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import '../styles/placesDetails.css';
const PlaceDetails = () => {
  const { id } = useParams();
  const place = useSelector(state => state.places.find(item => item.id === parseInt(id) ));
  return (
    <div className="circleD" style= {{backgroundColor: 'darkgrey'}} >
      <img src={place.photo} alt="" className="img" srcSet="" />
    </div>
  )
}

export default PlaceDetails