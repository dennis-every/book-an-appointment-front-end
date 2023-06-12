import { useDispatch, useSelector } from "react-redux"

const MyReservations = () => {
  const dispatch = useDispatch();
  const {isLoading, reservations, } = useSelector((state)=>state.reservations)
  return (
    <div>MyReservations</div>
  )
}

export default MyReservations