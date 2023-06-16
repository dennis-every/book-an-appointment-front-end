import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createReservation } from '../redux/reservations/reservationsSlice';
import { fetchPlacesAsync } from '../redux/places/placesSlice';
import './Reserve.scss';
import '../App.css';

const Reserve = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialPlace = location.state?.place;
  const [place, setPlace] = useState(initialPlace);
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const userId = useSelector((state) => state.login.userId);
  const places = useSelector((state) => state.places);

  useEffect(() => {
    if (userId === null) {
      navigate('/login');
    }
    dispatch(fetchPlacesAsync());
  }, [dispatch, userId, navigate]);

  const handlePlaceChange = (event) => {
    const placeId = Number(event.target.value);
    const selectedPlace = places.find((place) => place.id === placeId);
    setPlace(selectedPlace);
  };

  const handleBookNow = (event) => {
    event.preventDefault();
    const reservation = {
      customer_id: userId,
      place_id: place.id,
      start_date: startDate.toISOString().slice(0, 10),
      end_date: endDate.toISOString().slice(0, 10),
    };
    dispatch(createReservation(reservation));
    setStartDate(null);
    setEndDate(null);
    navigate('/myreservations');
  };

  return (
    <section className='reserve'>
      <div className='reserve--container'>
        <header>
          <h1 className='text-uppercase text-center fs-3 mb-4 fw-bold'>
            Book a place
          </h1>
        </header>
        <main>
          {place ? (
            <>
              <div className='text-center mb-4'>
                <small>
                  Located in {place.location} <br />
                  {place.description} <br />
                  For only {currency.format(place.rate)} per night
                </small>
              </div>
              <div className='reserve--container--form'>
                <div className='d-flex justify-content-center'>
                  <form onSubmit={handleBookNow}>
                    <div className='mb-3'>
                      <label
                        htmlFor='start_date'
                        className='visually-hidden'
                      ></label>
                      <DatePicker
                        id='start_date'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className='form-control'
                        placeholderText='Select a start date'
                        required
                      />
                    </div>
                    <div className='mb-3'>
                      <label
                        htmlFor='end_date'
                        className='visually-hidden'
                      ></label>
                      <DatePicker
                        id='end_date'
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        minDate={
                          startDate && new Date(startDate.getTime() + 86400000)
                        }
                        className='form-control'
                        placeholderText='Select an end date'
                        required
                      />
                    </div>
                    <div className='d-grid'>
                      <button type='submit' className='btn btn--white'>
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <>
              <label htmlFor='place' className='visually-hidden'></label>
              <select
                id='place'
                className='form-select'
                onChange={handlePlaceChange}
                defaultValue=''
                required
              >
                <option value='' disabled>
                  Please select a place
                </option>
                {places.map((place) => (
                  <option key={place.id} value={place.id}>
                    {place.location} - {currency.format(place.rate)}
                  </option>
                ))}
              </select>
            </>
          )}
        </main>
      </div>
    </section>
  );
};

export default Reserve;
