import React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import BeatLoader from 'react-spinners/BeatLoader';

import './styles.css';

import {useAuth} from '../../context/AuthContext';
import {LoginFormValues} from '../../types/';
import FormError from '../../components/form/FormError';

const App = ({history}: RouteComponentProps) => {
  const {login, auth} = useAuth();

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
            onSubmit={async (
              values: LoginFormValues,
              {setSubmitting},
            ): Promise<void> => {
              const navigateToDashboard = () => history.push('/');
              console.log(values);

              setSubmitting(false);
              await login(values, navigateToDashboard);
            }}
          >
            {formik => (
              <form
                className="form-horizontal m-t-30"
                onSubmit={formik.handleSubmit}
              >
                <FormError error={auth.errorMessage} />
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

                <div className="form-group row m-t-20">
                  <div className="col-sm-6">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customControlInline"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customControlInline"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6 text-right">
                    <button
                      className="btn btn-primary w-md waves-effect waves-light"
                      type="submit"
                      disabled={auth.loading}
                    >
                      {auth.loading ? (
                        <BeatLoader size={5} color="#fff" />
                      ) : (
                        'Log In'
                      )}
                    </button>
                  </div>
                </div>

                <div className="form-group m-t-10 mb-0 row">
                  <div className="col-12 m-t-20">
                    <a href="recoverpw.html">
                      <i className="mdi mdi-lock"></i> Forgot your password?
                    </a>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default withRouter(App);
