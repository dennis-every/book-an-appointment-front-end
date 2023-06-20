import React, { useState } from 'react';
import Reservation from './Reservation';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

const ReservationsSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const places = useSelector(state=> state.places);
  const {reservationsItems}=useSelector(state=> state.reservations);
  const { userName } = useSelector((state) => state.login);
  const itemsPerPage = 3;
  

  const showItems = (page) => {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return reservationsItems.slice(startIndex, endIndex).map((item) => (           
      <Reservation
        key={item.id}
        startDate={item.start_date}
        endDate={item.end_date}
        bill={parseFloat(item.bill,10)}        
        place={places.filter((place)=>place.id == item.place_id)}
        reserveId={item.id}
      />      
    ));
  };

  const showPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const showNext = () => {
    const maxPage = Math.ceil(reservationsItems.length / itemsPerPage) - 1;
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (reservationsItems.length===0) {
    return (
      <div className='d-flex flex-column justify-content-center text-center align-items-center vh-100 empty-places'>
        <h2 className='mb-3 fs-3 fw-bold text-white text-center Open-sans '>You don't have reservations yet {userName}.</h2>
      </div>
    )
  }

  return (
    <div className="places-cont">
    <div className='place-list-wrapper'>
      <div className='place-list-container'>
        <ul className="list">{showItems(currentPage)}</ul>
        <div className="pagination">
        <div
            className={`button-boxleft ${currentPage === 0 ? 'disabled' : ''}`}
          >
          <button className="pagination-button" onClick={showPrevious}><Icon color="#fff" icon="bx:left-arrow"  /></button>
        </div>      
        <div
            className={`button-boxright ${
              reservationsItems.length <= (currentPage + 1) * 3 ? 'disabled' : ''
            }`}
          >
            <button className="pagination-button" onClick={showNext}><Icon color="#fff" icon="bx:right-arrow" /></button>
        </div>
        </div>      
      </div>
    </div>
    </div>
  );
};

export default ReservationsSlider;
