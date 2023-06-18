import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { delPlace } from "../redux/places/placesSlice";
import '../styles/placeModal.css';

const Place = ({isOpen, onClose, placeId, description, location, rate}) => {
  const dispatch = useDispatch();
  const handler = (elem) => {    
    dispatch(delPlace(elem.id));
    onClose();   
  };
  return (    
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Are you sure you want to delete this place?</h2>
        <p>ID: {placeId}</p>     
        <p>Description: {description}</p>
        <p>Location: {location}</p>
        <p>Rate: {rate}</p>        
        <button className="btn btn-danger mb-2 ms-2" id={placeId} type="button" onClick={({ target }) => handler(target)}>Remove place</button>
        <button className="btn btn-primary mb-2 ms-2" onClick={onClose}>Close</button>   
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