import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Icon } from '@iconify/react';
import '../styles/placesDetails.css';
import '../styles/buttons.css'

const PlaceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = useSelector(state => state.places.find(item => item.id === parseInt(id) ));

  const handleReserveClick = () => {
    navigate('/reserve', { state: { place } });
  }

  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <div className='d-flex' style={{ width: '100vw', height: '100%' }}>
      <section className='d-flex align-items-center justify-content-center'  style={{ width: '70vw', height: '100vh' }} >
        <div className="circleD" style= {{backgroundColor: 'beige'}}>
          <img src={place.photo} alt="" className="img" srcSet="" />
        </div>
      </section>
      <section className='d-flex flex-column align-items-end' >
        <h2 className='mt-5 title' >{place.location}</h2>
        <table className="table table-striped table-hover table-borderless text-end detailsText mt-5">
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
        <div>
          <a href="/">Discover more places</a>
        </div>
        <div className='mt-5'>
          <button type="button" className="btn btn-success btn-lg detailsText btn-radius buttonReserve d-flex align-items-center justify-content-center" onClick={handleReserveClick}>Reserve</button>
        </div>
      </section>
    </div>
  )
}

export default PlaceDetails