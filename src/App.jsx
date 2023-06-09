import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import AddPlace from './routes/AddPlace'
import DeletePlace from './routes/DeletePlace'
import MyReservations from './routes/MyReservations'
import Reserve from './routes/Reserve'
import Places from './routes/Places'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Places />} />
      <Route path="addplace" element={<AddPlace />} />
      <Route path="deleteplace" element={<DeletePlace />} />
      <Route path="myreservations" element={<MyReservations />} />
      <Route path="reserve" element={<Reserve />} />
    </Routes>

  );
}

export default App;