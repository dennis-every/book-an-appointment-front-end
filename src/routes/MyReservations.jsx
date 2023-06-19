import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from '../redux/reservations/reservationsSlice';
import ReservationsContainer from '../components/ReservationsContainer';
import ReservationsSlider from '../components/ReservationsSlider';

const MyReservations = () => {
  const dispatch = useDispatch();
  const { isLoading, reservations } = useSelector((state)=>state.reservations);
  const userId = useSelector(state => state.login.userId);
  const itemsPerPage = 3;
    
  if (userId===null) {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center vh-100 empty-places'>
        <h2 className='mb-3 fs-3 fw-bold text-white Open-sans '>There is no user logged in.</h2>
      </div>
    )
  }

  useEffect(() => {
    dispatch(getReservations(userId));
  }, [dispatch]);

  if (isLoading) {
    return (
      <h2>Is loading .....</h2>
    );
  }

  return (
    <ReservationsSlider itemsPerPage={itemsPerPage} itemList={reservations} />
  )
}

export default MyReservations;