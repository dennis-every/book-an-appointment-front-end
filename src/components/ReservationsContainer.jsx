import { useSelector } from 'react-redux';
import Reservation from './Reservation';  


const ReservationsContainer = () => {
  const { reservationsItems } = useSelector((state) => state.reservations);
  return (
    <div>
      {reservationsItems.map((item) => (
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
