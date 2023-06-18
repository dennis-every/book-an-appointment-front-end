import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { delPlace } from "../redux/places/placesSlice";
import '../styles/placeModal.css';

const Place = ({isOpen, onClose, placeId, description, location, rate}) => {
  const dispatch = useDispatch();
  const handler = (elem) => {    
    dispatch(delPlace(elem.id)); 
  };
  return (    
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Modal Content</h2>
        <p>Place ID: {placeId}</p>
        <p>Description: {description}</p>
        <p>Location: {location}</p>
        <p>Rate: {rate}</p>
        <button className="btn btn-primary" onClick={onClose}>Close</button>   
        <button id={placeId} type="button" className="btn btn-primary" onClick={({ target }) => handler(target)}>Remove place</button>
      </div>
    </div>
  )
}

Place.propTypes = {
  placeId: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};

export default Place;