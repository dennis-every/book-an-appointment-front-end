import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import '../styles/placesDetails.css';
import '../styles/buttons.css'
const PlaceDetails = () => {
  const { id } = useParams();
  const place = useSelector(state => state.places.find(item => item.id === parseInt(id) ));
  return (
    <div className='d-flex'>
      <div className="circleD" style= {{backgroundColor: 'beige'}} >
        <img src={place.photo} alt="" className="img" srcSet="" />
      </div>
      <div className='place-det me-20'>
        <h2 className='mb-5 title' >{place.location}</h2>
        <table className="table table-striped table-hover table-borderless text-end detailsText">
          <tbody>
            <tr>
              <td colSpan="3">{place.description}</td>
            </tr>
            <tr>
              <td colSpan="3">Kitchen TV Wifi </td>
            </tr>
            <tr>
              <td className='fw-bold'  colSpan="3">{place.rate}$ <span className='fw-lighter' >night</span> </td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="btn btn-success btn-lg detailsText btn-radius buttonReserve text-center d-flex align-items-center">Reserve</button>
      </div>
    </div>
  )
}

export default PlaceDetails