import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { delPlace } from "../redux/places/placesSlice";
import '../styles/placeModal.css';

const PlaceModal = ({isOpen, onClose, placeId, description, location, rate}) => {
  const dispatch = useDispatch();
  const handler = (elem) => {    
    dispatch(delPlace(elem.id));
    onClose();   
  };
  return (    
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="d-flex flex-column justify-content-center align-items-center text-center modal-content">
        <h2>Are you sure you want to delete this place?</h2>
        <p>ID: {placeId}</p>     
        <p>Description: {description}</p>
        <p>Location: {location}</p>
        <p>Rate: {rate}</p>
        <div className='modal-btns'>
          <button className="btn btn-danger rounded-5 ms-4 mt-3 remove-button-red" id={placeId} type="button" onClick={({ target }) => handler(target)}>Remove place</button>
          <button className="btn btn-danger rounded-5 ms-4 mt-3 remove-button" onClick={onClose}>Close</button>   
        </div>        
      </div>
    </div>
  )
}

PlaceModal.propTypes = {
  placeId: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PlaceModal;