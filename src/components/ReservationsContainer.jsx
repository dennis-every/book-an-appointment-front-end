import React from 'react';
import { useSelector } from '../redux/redux-hooks';
import Reservation from './Reservation';

const ReservationsContainer = () => {
  const { reservations } = useSelector((state) => state.reservations);
  return (
    <div>
      {reservations.map((item) => (
        <Reservation
          key={item.id}          
          start_date={item.start_date}
          end_date={item.end_date}
          bill={item.bill}          
        />
      ))}

    </div>
  );
};

export default ReservationsContainer;