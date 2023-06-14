import { useLocation } from "react-router-dom";

const Reserve = () => {
  const location = useLocation();
  const place = location.state.place;
  return (
    <div>
      <h2>{place.description}</h2>
      <h2>{place.location}</h2>
      <h2>{place.rate}</h2>
      <h2>{place.id}</h2>
    </div>
  )
}

export default Reserve