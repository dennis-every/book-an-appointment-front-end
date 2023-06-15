import { useDispatch } from "react-redux";

const Place = ({placeId, description, location, rate}) => {
  const dispatch = useDispatch();
  const handler = (elem) => {
    dispatch(delPlace(elem.id));
  };
  return (
    <div className="card">
  
  <div className="card-body">
    <h5 className="card-title">Location: {location}</h5>
    <p className="card-text">Description: {description}</p>    
    <h5 className="card-title">Rate: ${rate}</h5>    
    <button id={placeId} type="button" class="btn btn-primary" onClick={({ target }) => handler(target)}>Base class</button>
  </div>
</div>
  )
}

export default Place;