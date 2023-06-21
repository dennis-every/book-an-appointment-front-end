import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { submitSignupForm } from '../redux/signup/signupSlice';
import './Signup.scss';

export const Signup = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: userName,
    };
    dispatch(submitSignupForm(user));
    setUserName('');
    navigate('/');
  };

  return (
    <section id="signup">
      <div className="signup--container">
        <header>
          <h1 className="text-center fs-2 text-secondary">Signup</h1>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control"
                />
              </label>
            </div>
            <div className="d-grid mt-5">
              <input
                type="submit"
                value="Submit"
                className="btn btn-success btn-radius"
              />
            </div>
          </form>
          <div className="text-center mt-5">
            <div>
              <Link to="/login" className="text-muted">
                Login
              </Link>
            </div>
            <div>
              <Link to="/" className="text-muted">
                Back
              </Link>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Signup;
