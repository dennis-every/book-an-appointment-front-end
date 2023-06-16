import { useLocation } from 'react-router-dom';
import './Reserve.scss';

const Reserve = () => {
  const location = useLocation();
  const place = location.state.place;
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

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
            <button className='btn btn--transparent'>Location</button>
            <button className='btn btn--white'>Book Now</button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Reserve;
