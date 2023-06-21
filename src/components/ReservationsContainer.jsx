import { useSelector } from 'react-redux';
import Reservation from './Reservation';

const ReservationsContainer = () => {
  const { reservationsItems } = useSelector((state) => state.reservations);
  const places = useSelector((state) => state.places);
  const { userName } = useSelector((state) => state.users);
  if (reservationsItems.length === 0) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 empty-places">
        <h2 className="mb-3 fs-3 fw-bold text-white text-center Open-sans ">
          You don&apos;t have reservations yet
          {userName}
          .
        </h2>
      </div>
    );
  }

  return (
    <div className="mt-5">
      {reservationsItems.map((item) => (
        <Reservation
          key={item.id}
          startDate={item.start_date}
          endDate={item.end_date}
          bill={parseFloat(item.bill, 10)}
          place={places.filter((place) => place.id === item.place_id)}
          reserveId={item.id}
        />
      ))}
    </div>
  );
};

export default ReservationsContainer;
