import React from 'react'

const Place = ({placeId, description, location, rate}) => {
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