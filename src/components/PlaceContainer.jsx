import { useSelector } from 'react-redux';
import Place from './Place';

const PlaceContainer = () => {
  const places = useSelector((state) => state.places);

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
};

export default PlaceContainer;
