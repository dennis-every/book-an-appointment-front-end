import {useSelector} from 'react-redux';
import Place from './Place';

const PlaceContainer = () => {
  const { place } = useSelector((state) => state.place);
  return (
    <div>
      {place.map((item) => (
        <Place
          key={item.id}          
          description={item.description}
          location={item.location}         
          rate={item.rate}          
        />
      ))}

    </div>
  );
}

export default PlaceContainer