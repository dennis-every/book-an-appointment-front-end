import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPlacesAsync } from '../redux/places/placesSlice';
import Place from '../components/Place';

const DeletePlace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places);
  const selectRef = useRef(null);

  useEffect(() => {
    dispatch(fetchPlacesAsync());
    const select = selectRef.current;
    let sPlace = places.filter(place=> place.id === parseInt(select.value));
    setSelectedValue(sPlace[0]);    
  }, [dispatch]); 

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
    <>
      <h2>DELETE PLACE</h2>
      <p>To delete a place please select it and click on the Remove Place button.</p>
      <select id="selectPlace" ref={selectRef} onChange={handlerChange}> 
        {places.map((place) => (
          <option key={place.id} value={place.id}>
            {place.location}
          </option>
        ))}
      </select>
      <button className="btn btn-danger ms-2" onClick={() => openModal()}>Remove place</button>
      {isModalOpen && (
        <Place
          isOpen={isModalOpen}
          onClose={closeModal}
          placeId={selectedValue.id}
          description={selectedValue.description}
          location={selectedValue.location}
          rate={selectedValue.rate}
        />
      )}
    </>   
  )
}

export default DeletePlace;