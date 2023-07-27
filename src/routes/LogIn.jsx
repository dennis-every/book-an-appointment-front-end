import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { submitLoginForm } from '../redux/users/usersSlice';
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
    <section id="login">
      <div className="login--container">
        <header>
          <h1 className="text-center fs-2 text-secondary">Login</h1>
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
              <motion.input
                whileHover={{ scale: 1.1 }}
                type="submit"
                value="Submit"
                className="btn btn-success btn-radius"
              />
            </div>
          </form>
          <div className="text-center mt-5">
            <div>
              <Link to="/signup" className="text-muted">
                Signup
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

export default LogIn;
