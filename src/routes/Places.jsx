import { useEffect } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlacesAsync } from '../redux/places/placesSlice';

const Place = ({ place }) => {
  const {
    description, photo, location, rate
  } = place;


  return (
    <li>
        <div>
          <img
            src={photo}
          />
        </div>
        <h2>{description}</h2>
        <h2>{location}</h2>
        <p>{rate}</p>
    </li>
  );
};

const PlaceList = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places);

  useEffect(() => {
    dispatch(fetchPlacesAsync());
  }, [dispatch]);

  const createList = (places) => {
    const list = places.map((place) => (
      <Place
        place={place}
        key={place.id}
      />
    ));
    return list;
  };


  return (
    <ul>
      { createList(places) }
    </ul>
  );
};

const Places = () => (
  <div>
    <h1>Anywhere, Any week</h1>
    <p>Please select a Place</p>
    <PlaceList />
  </div>
);


Place.propTypes = {
  place: PropTypes.shape({
    location: PropTypes.string,
    rate: PropTypes.number,
    photo: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Places;