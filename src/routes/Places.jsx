import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { fetchPlacesAsync } from '../redux/places/placesSlice';
import '../styles/places.css';
import {Link} from 'react-router-dom'

const Place = ({ place, index }) => {
  const { id, description, photo, location } = place;

  const getColorByIndex = (index) => {
    const colors = ['bisque', 'darkgrey', 'lightblue', 'burlywood'];
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  };

  const circleStyle = {
    backgroundColor: getColorByIndex(index),
  };

  const socialMedia = () => {
    const socialMedia = ['ri:facebook-fill', 'mdi:twitter', 'mdi:instagram'];
    const social = [];

    for (let i = 0; i < socialMedia.length; i += 1) {
      social.push(
        <li className="social-cont" key={`${id}-${socialMedia[i]}`}>
          <Icon className="social-mini" color="#bbbbbb" icon={socialMedia[i]} />
        </li>
      );
    }
    return social;
  };

  return (
    <li className="each-item">
      <Link className="place-link" to={`/places/${id}`}>
      <div className="img-cont">
        <div className="circle" style={circleStyle}>
          <img src={photo} className="img" alt="Place" />
        </div>
      </div>
      <h2 className="location">{location}</h2>
      </Link>
      <p className="description">{description}</p>
      <ul className="social">{socialMedia()}</ul>
    </li>
  );
};

Place.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number,
    location: PropTypes.string,
    rate: PropTypes.number,
    photo: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const PlaceList = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(fetchPlacesAsync());
  }, [dispatch]);

  const createList = (places) => {
    const startIndex = currentPage * 3;
    const endIndex = startIndex + 3;
    const slicedPlaces = places.slice(startIndex, endIndex);

    const list = slicedPlaces.map((place, index) => (
      <Place place={place} index={startIndex + index} key={place.id} />
    ));
    return list;
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="place-list-container">
      <ul className="list">{createList(places)}</ul>
      <div className="pagination">
        <button
          className="pagination-button"
          disabled={currentPage === 0}
          onClick={handlePreviousPage}
        >
          {'<'}
        </button>
        <button
          className="pagination-button"
          disabled={places.length <= (currentPage + 1) * 3}
          onClick={handleNextPage}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

const Places = () => (

  <div className="places-cont">
    <h1 className="title">Anywhere, Any week</h1>
    <p className="subtitle">Please select a Place</p>
    <div className="place-list-wrapper">
      <PlaceList />
    </div>
  </div>
);
export default Places