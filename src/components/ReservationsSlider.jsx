import React, { useState } from 'react';
import Reservation from './Reservation';

const ReservationsSlider = ({ itemsPerPage, itemList }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const showItems = (page) => {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return itemList.slice(startIndex, endIndex).map((item) => (      
      <Reservation
        key={item.id}
        startDate={item.start_date}
        endDate={item.end_date}
        bill={item.bill}
        placeId={item.place_id}
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
      <button onClick={showPrevious}>Previous</button>
      <div className='d-flex flex-wrap'>
        {showItems(currentPage)}
      </div>      
      <button onClick={showNext}>Next</button>
    </div>
  );
};

export default ReservationsSlider;
