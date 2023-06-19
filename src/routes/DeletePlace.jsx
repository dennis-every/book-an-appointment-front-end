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
    console.log("Splace = ", splace)
    setSelectedValue(sPlace[0]);
  }  
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 delete-place"
    style={{
      backgroundImage: `linear-gradient(
      0deg,
      rgba(151, 191, 14, 0.9),
      rgba(151, 191, 14, 0.9)
    ), url(${selectedValue.photo})`,
    }}
    >
      <h2 className='mb-3 fs-3 fw-bold text-white Open-sans '>DELETE PLACE</h2>
      <div className='mb-3 title-line'></div>
      <p className='text-center main-p'>To delete a place please select it and click on the Remove Place button.</p>
      <div className='d-flex selectAndButton'>
        <select className='ps-3 pe-3 rounded-5 place-select' id="selectPlace" ref={selectRef} onChange={handlerChange}> 
          {places.map((place) => (
            <option key={place.id} value={place.id}>
              {place.location}
            </option>
          ))}
        </select>
        <button className="btn btn-danger rounded-5 ms-4 mt-3 remove-button" onClick={() => openModal()}>Remove Place</button>
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