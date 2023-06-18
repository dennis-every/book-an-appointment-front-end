import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPlacesAsync } from '../redux/places/placesSlice';
import Place from '../components/Place';

const DeletePlace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places);
  const selectRef = useRef(null);

  useEffect(() => {
    dispatch(fetchPlacesAsync());
  }, [dispatch]);

  //Fill the select tag
  useEffect(() => {
    const select = selectRef.current;    
    select.innerHTML = '';
    places.forEach(element => {
      const option = document.createElement("option")      
      option.textContent = element.location;      
      option.value = element.id;
      select.appendChild(option); 
    });
  }, [places]);

  const openModal = (place) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const select = selectRef.current;    
  return (
    <>
      <h2>DELETE PLACE</h2>
      <p>To delete a place please select it and click on the Remove Place button.</p>
      <select name="selectPlace" id="selectPlace" ref={selectRef}> 
      </select>
      <button className="btn btn-danger ms-2" onClick={() => openModal(select.value)}>Remove place</button>
      {selectedPlace && (
        <Place
          isOpen={isModalOpen}
          onClose={closeModal}
          placeId={selectedPlace.id}
          description={selectedPlace.description}
          location={selectedPlace.location}
          rate={selectedPlace.rate}
        />
      )}
    </>   
  )
}

export default DeletePlace;