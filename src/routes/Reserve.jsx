import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

  const handleBookNow = (event) => {
    event.preventDefault();
    const reservation = {
      customer_id: 3,
      place_id: place.id,
      start_date: '2023-01-01',
      end_date: '2023-01-31',
      bill: 199.99,
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
          <div className='text-center mb-5'>
            <small>
              Located in {place.location} <br />
              {place.description} <br />
              For only {currency.format(place.rate)}
            </small>
          </div>
          <div className='reserve--container--buttons'>
            <div className='d-flex justify-content-center'>
              <form onSubmit={handleBookNow}>
                <button type='submit' className='btn btn--white'>
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Reserve;
