import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitLoginForm } from '../redux/login/loginSlice';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LogIn = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: userName,
    };
    dispatch(submitLoginForm(user));
    setUserName('');
    navigate('/');
  };

  return (
    <section id='login'>
      <div className='login--container'>
        <header>
          <h1 className='text-center fs-2 text-secondary'>Login</h1>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='name'></label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Username'
                value={name}
                onChange={(e) => setUserName(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='d-grid mt-5'>
              <input
                type='submit'
                value='Submit'
                className='btn btn-success btn-radius'
              />
            </div>
          </form>
          <div className='text-center mt-5'>
            <Link to='/' className='text-muted'>
              Back
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
};

export default LogIn;
