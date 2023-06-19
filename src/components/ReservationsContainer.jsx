import { useSelector } from 'react-redux';
import Reservation from './Reservation';

const ReservationsContainer = () => {
  const { reservations } = useSelector((state) => state.reservations);
  const { userName } = useSelector((state) => state.login);
  console.log(reservations);

  if (reservations.length===0) {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center vh-100 empty-places'>
        <h2 className='mb-3 fs-3 fw-bold text-white Open-sans '>You don't have reservations yet {userName}.</h2>
      </div>
    )
  }
  return (
    <div>
      {reservations.map((item) => (
        <Reservation
          key={item.id}          
          startDate={item.start_date}
          endDate={item.end_date}
          bill={parseFloat(item.bill)}
          placeId={item.place_id}          
        />
      ))}

    </div>
  );
};

export default ReservationsContainer;