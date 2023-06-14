import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchPlacesAsync } from '../redux/places/placesSlice';
import PlacesContainer from '../components/ReservationsContainer';

const DeletePlace = () => {
  const dispatch = useDispatch();  
  
  useEffect(() => {
    dispatch(fetchPlacesAsync());
  }, [dispatch]);

  return (
    <PlacesContainer />
  )
}

export default DeletePlace;