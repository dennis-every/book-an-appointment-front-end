import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { fetchPlacesAsync } from '../redux/places/placesSlice';
import '../styles/places.css';

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
      <div className="img-cont">
        <div className="circle" style={circleStyle}>
          <img src={photo} className="img" />
        </div>
      </div>
      <h2 className="location">{location}</h2>
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

  useEffect(() => {
    dispatch(fetchPlacesAsync());
  }, [dispatch]);

  const createList = (places) => {
    const list = places.map((place, index) => (
      <Place place={place} index={index} key={place.id} />
    ));
    return list;
  };

  return <ul className="list">{createList(places)}</ul>;
};

const Places = () => (
  <div className="places-cont">
    <h1 className="title">Anywhere, Any week</h1>
    <p className="subtitle">Please select a Place</p>
    <PlaceList />
  </div>
);

export default Places;
