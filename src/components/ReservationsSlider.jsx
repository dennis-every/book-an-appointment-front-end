import React, { useState } from 'react';
import Reservation from './Reservation';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

const ReservationsSlider = ({ itemsPerPage, itemList }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const places = useSelector(state=> state.places)

  const showItems = (page) => {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return itemList.slice(startIndex, endIndex).map((item) => (           
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
    const maxPage = Math.ceil(itemList.length / itemsPerPage) - 1;
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='d-flex'>
      <div
          className={`button-boxleft ${currentPage === 0 ? 'disabled' : ''}`}
        >
        <button className="pagination-button" onClick={showPrevious}><Icon color="#fff" icon="bx:left-arrow"  /></button>
      </div>
      
      <div className='d-flex flex-wrap'>
        {showItems(currentPage)}
      </div>
      <div
          className={`button-boxright ${
            places.length <= (currentPage + 1) * 3 ? 'disabled' : ''
          }`}
        >
          <button className="pagination-button" onClick={showNext}><Icon color="#fff" icon="bx:right-arrow" /></button>
      </div>      
      
    </div>
  );
};

export default ReservationsSlider;
