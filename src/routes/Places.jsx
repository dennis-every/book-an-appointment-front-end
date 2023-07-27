import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import '../styles/places.css';
import { Link } from 'react-router-dom';
import { isMobileOnly } from 'react-device-detect';
import { fetchPlacesAsync } from '../redux/places/placesSlice';
import { motion } from 'framer-motion';
 
const Place = ({ place }) => {
  const {
    id, description, photo, location, rate,
  } = place;

  const socialMedia = () => {
    const socialMedia = ['ri:facebook-fill', 'mdi:twitter', 'mdi:instagram'];
    const social = [];

    for (let i = 0; i < socialMedia.length; i += 1) {
      social.push(
        <li className="social-cont" key={`${id}-${socialMedia[i]}`}>
          <Icon className="social-mini" color="#bbbbbb" icon={socialMedia[i]} />
        </li>,
      );
    }
    return social;
  };

  return (
    <li className="each-item">
      <Link className="place-link" to={`/places/${id}`}>
        <div className="place-wrapper">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="img-cont"
            >
            <div className="circle">
              <img src={photo} className="img" alt="Place" />
            </div>
          </motion.div>
          <h2 className="location">{location}</h2>
          <p className="dots">....................</p>
        </div>
      </Link>
      <p className="description">{description}</p>
      <p className="rate">
        $
        {rate}
        {' '}
        per night
      </p>
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
};

const WebPlaceList = ({
  places, currentPage, handlePreviousPage, handleNextPage,
}) => {
  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, places.length);

  const createList = () => places
    .slice(startIndex, endIndex)
    .map((place, index) => (
      <Place place={place} index={startIndex + index} key={place.id} />
    ));

  return (
    <div className="place-list-container">
      <ul className="list">{createList()}</ul>
      <div className="pagination">
        <div
          className={`button-boxleft ${currentPage === 0 ? 'disabled' : ''}`}
        >
          <button
            type="button"
            className="pagination-button"
            disabled={currentPage === 0}
            onClick={handlePreviousPage}
          >
            <Icon color="#fff" icon="bx:left-arrow" />
          </button>
        </div>
        <div
          className={`button-boxright ${
            places.length <= (currentPage + 1) * 3 ? 'disabled' : ''
          }`}
        >
          <button
            type="button"
            className="pagination-button"
            disabled={places.length <= (currentPage + 1) * 3}
            onClick={handleNextPage}
          >
            <Icon color="#fff" icon="bx:right-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

WebPlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      location: PropTypes.string,
      rate: PropTypes.number,
      photo: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePreviousPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
};

const MobilePlaceList = ({ places }) => (
  <div className="place-list-container">
    <ul className="list">
      {places.map((place, index) => (
        <Place place={place} index={index} key={place.id} />
      ))}
    </ul>
  </div>
);

MobilePlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      location: PropTypes.string,
      rate: PropTypes.number,
      photo: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

const PlaceList = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(fetchPlacesAsync());
  }, [dispatch]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (isMobileOnly) {
    return <MobilePlaceList places={places} />;
  }
  return (
    <WebPlaceList
      places={places}
      currentPage={currentPage}
      handlePreviousPage={handlePreviousPage}
      handleNextPage={handleNextPage}
    />
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

export default Places;
