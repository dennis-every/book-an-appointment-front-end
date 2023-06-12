import { Link } from 'react-router-dom';
import './Login.scss';

const LogIn = () => {
  return (
    <section id='login'>
      <div className='login--container'>
        <header>
          <h1 className='text-center fs-2 text-secondary'>Login</h1>
        </header>
        <main>
          <form action='POST'>
            <div className='mb-3'>
              <label htmlFor='username'></label>
              <input
                type='text'
                id='username'
                name='username'
                placeholder='Username'
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
