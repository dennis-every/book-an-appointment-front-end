import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchPlacesAsync } from '../redux/places/placesSlice';
import Place from './Place';

const PlaceContainer = () => {
  const places = useSelector((state) => state.places);
  const dispatch = useDispatch();  
  
  useEffect(() => {
    dispatch(fetchPlacesAsync());
  }, [dispatch]);
  return (
    <div>
      {places.map((item) => (
        <Place
          key={item.id}          
          description={item.description}
          location={item.location}        
          rate={item.rate}
          placeId={item.id}       
        />
      ))}

    </div>
  );
}

export default PlaceContainer