import PropTypes from 'prop-types';

const Reservation = ({
  startDate, endDate, bill, placeId,
}) => (
  <div className="card">

    <div className="card-body">
      <h5 className="card-title">
        Place:
        {placeId}
      </h5>
      <p className="card-text">
        Start date:
        {startDate}
      </p>
      <p className="card-text">
        End date:
        {endDate}
      </p>
      <h5 className="card-title">
        Bill: $
        {bill}
      </h5>
      <a href="#" className="btn btn-primary">Details</a>
    </div>
  </div>
);

Reservation.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  bill: PropTypes.number.isRequired,
  placeId: PropTypes.number.isRequired,
};

export default Reservation;
