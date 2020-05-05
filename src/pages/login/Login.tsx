import React from 'react';
import {withRouter} from 'react-router-dom';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import BeatLoader from 'react-spinners/BeatLoader';
import {connect, useSelector} from 'react-redux';

import login from '../../redux/actions/login.action';
import './styles.css';
import {LoginFormValues} from '../../types/';
import FormError from '../../components/form/FormError';

const App = ({history, login}: {history: any; login: any}) => {
  const {errorMessage} = useSelector(
    (error: {error: boolean; errorMessage: string}) => error,
  );

  const {authentication} = useSelector(
    (authentication: {authentication: {loading: boolean; token: string}}) =>
      authentication,
  );
  const {loading} = authentication;

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="p-3">
          <h4>Welcome Back !</h4>
          <p className="text-muted">Sign in to your account.</p>

          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Email not valid')
                .required('Please provide email'),
              password: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(6, 'must 6 characters or more')
                .required('Please provide password'),
            })}
            onSubmit={async (values: LoginFormValues): Promise<void> => {
              const navigateToDashboard = () => history.push('/view');
              console.log(values);
              await login(values, navigateToDashboard);
            }}
          >
            {formik => (
              <form
                className="form-horizontal m-t-30"
                onSubmit={formik.handleSubmit}
              >
                <FormError error={errorMessage} />
                <div className="form-group">
                  <label htmlFor="username">Email address</label>

                  <Field
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <small style={{color: 'red'}}>{formik.errors.email}</small>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="userpassword">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <small style={{color: 'red'}}>
                      {formik.errors.password}
                    </small>
                  ) : null}
                </div>

                <div className="form-group ">
                  <button
                    className="btn btn-primary w-md waves-effect waves-light"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? <BeatLoader size={5} color="#fff" /> : 'Log In'}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  login,
};

export default withRouter(connect(null, mapDispatchToProps)(App));
