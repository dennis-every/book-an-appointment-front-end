import PropTypes from 'prop-types';
const Reservation = ({startDate, endDate, bill, reserveId, place}) => {
  console.log("Place=", place)
  return (
    <li className="each-item mb-4 mt-2">
  
      <div className="place-wrapper">
              <div className="img-cont">
                <div className="circle">
                  <img src={place[0].photo} className="img" alt="Place" />
                </div>
              </div>
              <h2 className="location">{place[0].location}</h2>
              <p className="dots">....................</p>
              <h2 className="location">Reserve ID: {reserveId}</h2>
            </div>
          
          <p className="description">{startDate}</p>
          <p className="description">{endDate}</p>      
          <p className="rate">${bill}</p>
    </li>
  )
}

Reservation.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  bill: PropTypes.number.isRequired,
  placeId: PropTypes.number.isRequired,  
};

export default Reservation