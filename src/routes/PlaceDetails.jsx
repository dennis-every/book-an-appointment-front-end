import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import '../styles/placesDetails.css';
import '../styles/buttons.css';
import { motion } from 'framer-motion';

const PlaceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = useSelector((state) => state.places.find((item) => item.id === parseInt(id, 10)));

  const handleReserveClick = () => {
    navigate('/reserve', { state: { place } });
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="d-flex details-container">
      <motion.section
        whileHover={{}}
        className="d-flex align-items-center justify-content-center place-image"
      >
        <div className="circleD" style={{ backgroundColor: 'beige' }}>
          <img src={place.photo} alt="" className="img" />
        </div>
      </motion.section>
      <section className="d-flex flex-column align-items-end info-details">
        <div className="d-flex flex-column align-items-end justify-content-center">
          <h2 className="mt-5 title">{place.location}</h2>
          <table className="table table-striped table-hover table-borderless text-end detailsText mt-5 fw-medium">
            <tbody>
              <tr>
                <td colSpan="3">{place.description}</td>
              </tr>
              <tr>
                <td colSpan="3">Kitchen TV Wifi </td>
              </tr>
              <tr>
                <td className="fw-bold" colSpan="3">
                  $
                  {place.rate}
                  {' '}
                  <span className="fw-lighter">night</span>
                  {' '}
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <Link className="place-link detailsText fw-bold d-flex align-items-center justify-content-center" to="/" style={{ fontSize: '13px' }}>
              DISCOVER MORE PLACES
              <Icon icon="iconamoon:arrow-right-2-bold" color="#f7db59" width="20" height="20" />
            </Link>
          </div>
          <div className="mt-5 reserve-mobile">
            <motion.button
              whileHover={{ scale: 1.1 }}
              type="button"
              className="btn btn-success btn-lg detailsText btn-radius buttonReserve d-flex align-items-center justify-content-center"
              onClick={handleReserveClick}
            >
              Reserve
              <Icon className="ms-3" icon="ri:arrow-right-circle-line" width="20" height="20" />
            </motion.button>
          </div>
        </div>
      </section>
      <div className="button-boxleft buttonBackPos">
        <button type="button" className="no-style-button pagination-button" onClick={handleBackClick}>
          <Icon color="#fff" icon="bx:left-arrow" />
        </button>
      </div>
    </div>
  );
};

export default PlaceDetails;
