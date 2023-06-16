import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createReservation } from '../redux/reservations/reservationsSlice';
import './Reserve.scss';
import '../App.css';

const Reserve = () => {
  const location = useLocation();
  const place = location.state.place;
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const userId = useSelector((state) => state.login.userId);

  const handleBookNow = (event) => {
    event.preventDefault();
    const reservation = {
      customer_id: userId,
      place_id: place.id,
      start_date: startDate.toISOString().slice(0, 10),
      end_date: endDate.toISOString().slice(0, 10),
    };
    console.log(reservation);
    dispatch(createReservation(reservation));
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
          <div className='text-center mb-4'>
            <small>
              Located in {place.location} <br />
              {place.description} <br />
              For only {currency.format(place.rate)} per night
            </small>
          </div>
          <div className='reserve--container--buttons'>
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
                  <label htmlFor='end_date' className='visually-hidden'></label>
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
        </main>
      </div>
    </section>
  );
};

export default Reserve;
