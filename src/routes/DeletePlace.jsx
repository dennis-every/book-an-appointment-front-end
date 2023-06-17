import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchPlacesAsync } from '../redux/places/placesSlice';
import PlaceContainer from '../components/PlaceContainer';

const DeletePlace = () => {
  const dispatch = useDispatch();  
  
  useEffect(() => {
    dispatch(fetchPlacesAsync());
  }, [dispatch]);

  return (
    <>
      <h2>DELETE PLACE</h2>
      <p>To delete a place please select it and click on the Remove Place button.</p>
      <PlaceContainer />
    </>   
  )
}

export default DeletePlace;