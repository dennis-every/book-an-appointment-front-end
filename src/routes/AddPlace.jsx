import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlaceAsync } from '../redux/places/placesSlice';

const Form = () => {
  const [photo, setPhoto] = useState('');
  const [location, setLocation] = useState('');
  const [rate, setRate] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const addPlacehandler = (e) => {
    e.preventDefault();

    if ( photo !== '' && rate > 0 && location !== '' && description !== '') {
      const place = {
         photo, rate, location, description,
      };
      dispatch(addPlaceAsync(place));
      e.target.reset();
    }
  };

  const resetForm = () => {
    setPhoto('');
    setLocation('');
    setRate('');
    setDescription('');
  };

  return (
    <>
      <form
        onSubmit={addPlacehandler}
        onReset={resetForm}
      >
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Image URL"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Rate"
        />
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a short description"
          rows="6"
        />
        <input
          type="submit"
          value="Add Place"
          title="Click this or press enter to submit"
        />
      </form>
    </>
  );
};

const AddPlace = () => (
  <div>
    <h2>ADD A NEW PLACE</h2>
    <Form />
  </div>
);

export default AddPlace;