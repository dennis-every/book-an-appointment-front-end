import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlaceAsync } from '../redux/places/placesSlice';
import { useNavigate } from 'react-router-dom'; // Updated import statement // Updated import statement
import '../styles/addplace.scss';

const Form = () => {
  const [photo, setPhoto] = useState('');
  const [location, setLocation] = useState('');
  const [rate, setRate] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const loggedInUser = useSelector((state) => state.login.userId); // Access the user's ID from the loginSlice

  const addPlacehandler = (e) => {
    e.preventDefault();

    if (photo !== '' && rate > 0 && location !== '' && description !== '') {
      const place = {
        photo,
        rate: Number(rate),
        location,
        description,
        owner_id: loggedInUser, // Set the owner_id as the logged-in user's ID
      };
      dispatch(addPlaceAsync(place));
      e.target.reset();
      navigate('/'); // Redirect to the index path
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
        className="form"
        onSubmit={addPlacehandler}
        onReset={resetForm}
      >
        <input
          className="input"
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Image URL"
        />
        <input
          className="input"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <input
          className="input"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Rate"
        />
        <textarea
          className="input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a short description"
          rows="6"
        />
        <input
          className="add-btn"
          type="submit"
          value="Add Place"
          title="Click this or press enter to submit"
        />
      </form>
    </>
  );
};

const AddPlace = () => (
  <div className="form-cont">
    <h2 className="title">ADD A NEW PLACE</h2>
    <Form />
  </div>
);

export default AddPlace;