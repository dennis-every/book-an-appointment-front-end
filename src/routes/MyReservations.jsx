import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isMobileOnly } from 'react-device-detect';
import { getReservations } from '../redux/reservations/reservationsSlice';
import ReservationsContainer from '../components/ReservationsContainer';
import ReservationsSlider from '../components/ReservationsSlider';

const MyReservations = () => {
  const dispatch = useDispatch();
  const { isLoading, reservationsItems } = useSelector((state) => state.reservations);
  const userId = useSelector((state) => state.login.userId);
  const itemsPerPage = 3;

  useEffect(() => {
    dispatch(getReservations(userId));
  }, [dispatch]);

  if (userId === null) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 empty-places">
        <h2 className="mb-3 fs-3 fw-bold text-white Open-sans ms-4 me-4 text-center">There is no user logged in.</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <h2>Is loading .....</h2>
    );
  }

  if (!isMobileOnly) {
    return (
      <ReservationsSlider itemsPerPage={itemsPerPage} itemList={reservationsItems} />
    );
  }
  return (
    <ReservationsContainer />
  );
};

export default MyReservations;
