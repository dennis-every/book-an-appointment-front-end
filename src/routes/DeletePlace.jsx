import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPlacesAsync } from '../redux/places/placesSlice';
import Place from '../components/Place';

const DeletePlace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');
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
    
    let sPlace = places.filter(place=> place.id === parseInt(select.value));
    setSelectedValue(sPlace[0]);
    console.log(`Selected value (useEffect fill) ${selectedValue}`)
  }, [places]);

  const openModal = (place) => {
    console.log(`Place inside modal ${place} ---`)
    setSelectedPlace(place);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlerChange = (event) => {
    console.log(`Handler change ${event.target.value}`)
    let sPlace = places.filter(place=> place.id === parseInt(event.target.value));
    console.log(sPlace)
    setSelectedValue(sPlace[0]);
  }  
  console.log("selected value=", selectedValue)
  
  return (
    <>
      <h2>DELETE PLACE</h2>
      <p>To delete a place please select it and click on the Remove Place button.</p>
      <select value={selectedValue} id="selectPlace" ref={selectRef} onChange={handlerChange}> 
      </select>
      <button className="btn btn-danger ms-2" onClick={() => openModal(selectedValue)}>Remove place</button>
      {isModalOpen && (
        <Place
          isOpen={isModalOpen}
          onClose={closeModal}
          placeId={selectedValue.id}
          description={selectedValue.description}
          location={selectedValue.location}
          rate={selectedPlace.rate}
        />
      )}
    </>   
  )
}

export default DeletePlace;