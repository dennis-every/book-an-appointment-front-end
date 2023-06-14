import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import '../styles/placesDetails.css';
const PlaceDetails = () => {
  const { id } = useParams();
  const place = useSelector(state => state.places.find(item => item.id === parseInt(id) ));
  return (
    <div className='d-flex'>
      <div className="circleD" style= {{backgroundColor: 'lightblue'}} >
        <img src={place.photo} alt="" className="img" srcSet="" />
      </div>
      <div className='place-det'>
        <table className="table table-striped table-hover">
          <tbody>
            <tr>
              <td colSpan="3">{place.description}</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PlaceDetails