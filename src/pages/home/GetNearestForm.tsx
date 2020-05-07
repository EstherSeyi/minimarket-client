import React from 'react';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';

import {getNearestMarket} from '../../redux/actions/market.action';
import FormError from '../../components/form/FormError';

const initialValues = {
  address: '',
};

const App = ({
  history,
  loading,
  getNearestMarket,
  errorMessage,
}: {
  history?: any;
  loading?: any;
  getNearestMarket?: any;
  errorMessage?: any;
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        searchBy: Yup.string().required('Please provide your address!'),
      })}
      onSubmit={async (values): Promise<void> => {
        const navigateToDashboard = () => history.push('/search');

        await getNearestMarket(values, navigateToDashboard);
      }}
    >
      {formik => (
        <form className="form-horizontal m-t-30" onSubmit={formik.handleSubmit}>
          <FormError error={errorMessage} />

          <div className="form-group">
            <label htmlFor="searchValue">Your Address</label>
            <Field
              type="text"
              name="address"
              className="form-control"
              placeholder="Enter your address"
            />

            {formik.touched.address && formik.errors.address ? (
              <small style={{color: 'red'}}>{formik.errors.address}</small>
            ) : null}
          </div>

          <div className="form-group ">
            <button
              className="btn btn-primary w-md waves-effect waves-light"
              type="submit"
              disabled={loading}
            >
              {loading ? <BeatLoader size={5} color="#fff" /> : 'Submit'}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = {
  getNearestMarket,
};

const mapStateToProps = (state: any) => {
  const {markets, error} = state;
  return {
    searches: markets.searches,
    loading: markets.loading,
    errorMessage: error.errorMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
