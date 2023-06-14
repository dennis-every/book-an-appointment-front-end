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
    <PlaceContainer />
  )
}

export default DeletePlace;