import React from 'react';
import {Formik, Field} from 'formik';
import {withRouter} from 'react-router-dom';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';

import {searchMarket} from '../../redux/actions/market.action';
import FormError from '../../components/form/FormError';

const initialValues = {
  searchBy: '',
  searchValue: '',
};

const App = ({
  searchMarket,
  loading,
  history,
  errorMessage,
}: {
  searchMarket?: any;
  history?: any;
  loading?: any;
  errorMessage?: any;
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        searchBy: Yup.string().required('Please select search parameter'),
        searchValue: Yup.string().required(
          'Please provide food category or market name',
        ),
      })}
      onSubmit={async (values): Promise<void> => {
        const navigateToDashboard = () => history.push('/search');

        await searchMarket(values, navigateToDashboard);
      }}
    >
      {formik => (
        <form className="form-horizontal m-t-30" onSubmit={formik.handleSubmit}>
          <FormError error={errorMessage} />
          <div className="form-group">
            <label htmlFor="searchBy">Search By</label>

            <Field as="select" name="searchBy" className="form-control">
              <option disabled={true}>Select Search Parameter</option>
              <option value="name"> Market Name</option>
              <option value="foodCategory"> Food Category</option>
            </Field>
            {formik.touched.searchBy && formik.errors.searchBy ? (
              <small style={{color: 'red'}}>{formik.errors.searchBy}</small>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="searchValue">Value</label>
            <Field
              type="text"
              name="searchValue"
              className="form-control"
              placeholder="Enter value to search by"
            />

            {formik.touched.searchValue && formik.errors.searchValue ? (
              <small style={{color: 'red'}}>{formik.errors.searchValue}</small>
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
  searchMarket,
};

const mapStateToProps = (state: any) => {
  const {markets, error} = state;

  return {
    loading: markets.loading,
    errorMessage: error.errorMessage,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
