import { Link } from 'react-router-dom';
import '../styles/custom.css' 

const Places = () => {
  return (
    <Link to={`/place/1`} className="place-link">
      <div> Here should be the component for the Place with id:1</div>
    </Link>
  )
}

export default Places