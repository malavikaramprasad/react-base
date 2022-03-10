// React imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

// CSS imports
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    let navigate = useNavigate();

    const onHandleSubmit = (event) => {
        event.preventDefault();
        navigate('/home');
    }

    return (
    <section className="vh-100" >
    <form onSubmit={onHandleSubmit}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
              <div className="card-body p-5 text-center">

                <h3 className="mb-5">Sign in</h3>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                  <input type="email" placeholder="Enter email" id="typeEmailX-2" className="form-control form-control-lg" />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                  <input type="password" placeholder="Enter password" id="typePasswordX-2" className="form-control form-control-lg" />
                </div>

                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label className="form-check-label" style={{marginLeft: "1rem"}}> Remember password </label>
                </div>

                <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                <hr className="my-4"/>


              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </section>
  );
}

export default Login;