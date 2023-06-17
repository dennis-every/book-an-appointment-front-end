import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPlacesAsync } from '../redux/places/placesSlice';
import PlaceContainer from '../components/PlaceContainer';

const DeletePlace = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places);
  const selectRef = useRef(null);

  useEffect(() => {
    dispatch(fetchPlacesAsync());
  }, [dispatch]);

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

  return (
    <>
      <h2>DELETE PLACE</h2>
      <p>To delete a place please select it and click on the Remove Place button.</p>
      <select name="selectPlace" id="selectPlace" ref={selectRef}>    
      </select>
      <PlaceContainer />
    </>   
  )
}

export default DeletePlace;