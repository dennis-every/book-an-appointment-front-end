import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, submitLoginForm } from '../redux/login/loginSlice';
import './Login.scss';

const LogIn = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.login.userName);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(submitLoginForm({ name }));
    dispatch(setUserName(''));
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
                onChange={(e) => dispatch(setUserName(e.target.value))}
                className='form-control'
              />
            </div>
            <div className='d-grid mt-5'>
              <input type='submit' value='Submit' className='btn btn-primary' />
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
