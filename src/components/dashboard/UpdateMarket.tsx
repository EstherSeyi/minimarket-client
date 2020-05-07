import React, {useState} from 'react';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import Card from 'antd/lib/card';
import {connect, useSelector} from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';

import uploadImg from '../../redux/actions/images.action';
import {updateMarket} from '../../redux/actions/market.action';
import {MarketForm} from '../../types/index';
import FormError from '../form/FormError';

const App = ({
  uploadImg,
  updateMarket,
  data,
}: {
  uploadImg?: any;
  updateMarket?: any;
  data?: any;
}) => {
  const {errorMessage} = useSelector(
    (error: {error: boolean; errorMessage: string}) => error,
  );

  const initialValues: MarketForm = {
    marketname: data.name,
    foodCategory: data.foodCategory,
    description: data.description,
    images: data.images,
    lat: data.lat,
    lng: data.lng,
  };

  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);

  // eslint-disable-next-line
  const [filesImg, setFilesImg] = useState<any>([]);

  const [imageLinks, setImageLinks] = useState([]);
  const [imageError, setImageError] = useState('');

  const handleImage = async (e: any) => {
    const {files} = e.target;

    setLoading(true);

    setFilesImg((prevState: any) => [...prevState, ...files]);

    const imgArray: any = [];

    for (let index = 0; index < files.length; index++) {
      const img = await uploadImg(files[index]);
      imgArray.push(img);
    }

    setImageLinks(imgArray);

    setLoading(false);
  };

  return (
    <Card title="New Market" bordered={true}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          description: Yup.string()
            .min(2, 'Must be more than 1 characters')
            .max(255, 'Must be 255 characters or less')
            .required('Please provide market description!'),
          lat: Yup.string()
            .min(2, 'Must be more than 1 characters')
            .max(10, 'Must be 10 characters or less')
            .required('Please provide latitude!'),
          lng: Yup.string()
            .min(2, 'Must be more than 1 characters')
            .max(10, 'Must be 10 characters or less')
            .required('Please provide longitude!'),
          foodCategory: Yup.string().required('Please choose food category'),
        })}
        onSubmit={async (values: MarketForm): Promise<void> => {
          const {marketname, lat, lng, ...rest} = values;

          if (imageLinks.length > 3) {
            setImageError('Please provide 3 images');
            return;
          }

          setProcessing(true);

          await updateMarket({
            id: data._id,
            name: values.marketname,
            latlng: `${values.lat},${values.lng}`,
            ...rest,
          });
          setProcessing(false);
        }}
      >
        {formik => (
          <form
            className="form-horizontal m-t-30"
            onSubmit={formik.handleSubmit}
          >
            <FormError error={errorMessage} />
            <div className="form-group">
              <label htmlFor="username">Market Name</label>

              <Field
                type="text"
                name="marketname"
                className="form-control"
                placeholder="Enter market name"
                disabled={true}
              />
              {formik.touched.marketname && formik.errors.marketname ? (
                <small style={{color: 'red'}}>{formik.errors.marketname}</small>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="foodCategory">Food Category</label>
              <Field
                type="text"
                name="foodCategory"
                className="form-control"
                placeholder="Enter food category"
              />

              {formik.touched.foodCategory && formik.errors.foodCategory ? (
                <small style={{color: 'red'}}>
                  {formik.errors.foodCategory}
                </small>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field
                type="text"
                name="description"
                as="textarea"
                className="form-control"
                placeholder="Enter Description"
              />
              {formik.touched.description && formik.errors.description ? (
                <small style={{color: 'red'}}>
                  {formik.errors.description}
                </small>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="lat">Latitude</label>
              <Field
                type="text"
                name="lat"
                className="form-control"
                placeholder="Enter Latitude"
              />
              {formik.touched.lat && formik.errors.lat ? (
                <small style={{color: 'red'}}>{formik.errors.lat}</small>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="lng">Longitude</label>
              <Field
                type="text"
                name="lng"
                className="form-control"
                placeholder="Enter Longitude"
              />
              {formik.touched.lng && formik.errors.lng ? (
                <small style={{color: 'red'}}>{formik.errors.lng}</small>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="images">Market Image</label>
              <br />
              <small>Tip: Select 3 images all at once.</small>
              <input
                multiple
                type="file"
                name="images"
                className="form-control"
                onChange={handleImage}
              />
              <small style={{color: 'red'}}>{imageError}</small>
            </div>

            <div className="form-group ">
              <button
                className="btn btn-primary w-md waves-effect waves-light"
                type="submit"
                disabled={loading || processing}
              >
                {loading ? (
                  'Please wait'
                ) : processing ? (
                  <BeatLoader size={5} color="#fff" />
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </Card>
  );
};

const mapDispatchToProps = {
  uploadImg,
  updateMarket,
};

export default connect(null, mapDispatchToProps)(App);
