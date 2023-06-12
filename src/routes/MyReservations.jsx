import { useDispatch, useSelector } from "react-redux"

const MyReservations = () => {
  const dispatch = useDispatch();
  const {isLoading, reservations, } = useSelector((state)=>state.reservations)

  useEffect(() => {
    if (reservations.length === 0) {
      dispatch(getReservations());
    }
  }, [dispatch]);


  return (
    <div>MyReservations</div>
  )
}

export default MyReservations