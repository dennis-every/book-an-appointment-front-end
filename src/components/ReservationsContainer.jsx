import { useSelector } from 'react-redux';
import Reservation from './Reservation';

const ReservationsContainer = () => {
  const { reservations } = useSelector((state) => state.reservations);
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
