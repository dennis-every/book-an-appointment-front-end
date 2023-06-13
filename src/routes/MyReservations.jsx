import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from '../redux/reservations/reservationsSlice';
import ReservationsContainer from '../components/ReservationsContainer';

const MyReservations = () => {
  const dispatch = useDispatch();
  const {isLoading, reservations, } = useSelector((state)=>state.reservations)

  useEffect(() => {
    if (reservations.length === 0) {
      dispatch(getReservations());
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <h2>Is loading .....</h2>
    );
  }

  return (
    <ReservationsContainer />
  )
}

export default MyReservations;