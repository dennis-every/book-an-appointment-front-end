import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPlacesAsync } from '../redux/places/placesSlice';
import PlaceModal from '../components/PlaceModal';
import '../styles/deletePlace.css';

const DeletePlace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places);
  const selectRef = useRef(null);

  useEffect(() => {
    dispatch(fetchPlacesAsync());    
  }, [dispatch]);

  useEffect(() => {
    const select = selectRef.current;
    let sPlace = places.filter(place=> place.id === parseInt(select.value));
    setSelectedValue(sPlace[0]);    
  }, [places]);

  const openModal = () => {       
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlerChange = (event) => {    
    let sPlace = places.filter(place=> place.id === parseInt(event.target.value));    
    setSelectedValue(sPlace[0]);
  }  
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100"
    style={{
      backgroundImage: `linear-gradient(
      0deg,
      rgba(151, 191, 14, 0.9),
      rgba(151, 191, 14, 0.9)
    ), url(${selectedValue.photo})`,
    }}
    >
      <h2>DELETE PLACE</h2>
      <p>To delete a place please select it and click on the Remove Place button.</p>
      <div>
        <select id="selectPlace" ref={selectRef} onChange={handlerChange}> 
          {places.map((place) => (
            <option key={place.id} value={place.id}>
              {place.location}
            </option>
          ))}
        </select>
        <button className="btn btn-danger rounded-5 ms-2" onClick={() => openModal()}>Remove Place</button>
      </div>
      {isModalOpen && (
        <PlaceModal
          isOpen={isModalOpen}
          onClose={closeModal}
          placeId={selectedValue.id}
          description={selectedValue.description}
          location={selectedValue.location}
          rate={selectedValue.rate}
        />
      )}
    </div>   
  )
}

export default DeletePlace;