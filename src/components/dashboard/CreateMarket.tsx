import React, {useState} from 'react';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import Card from 'antd/lib/card';
import {connect, useSelector} from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import notification from 'antd/lib/notification';
import {RadiusBottomrightOutlined} from '@ant-design/icons';

import uploadImg from '../../redux/actions/images.action';
import {createMarket} from '../../redux/actions/market.action';
import {MarketForm} from '../../types/index';
import FormError from '../form/FormError';

const initialValues: MarketForm = {
  marketname: '',
  foodCategory: '',
  description: '',
  images: [],
  lat: '',
  lng: '',
};

const App = ({
  uploadImg,
  createMarket,
}: {
  uploadImg: any;
  createMarket: any;
}) => {
  const {errorMessage} = useSelector(
    (error: {error: boolean; errorMessage: string}) => error,
  );

  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);

  // eslint-disable-next-line
  const [filesImg, setFilesImg] = useState<any>([]);

  const [imageLinks, setImageLinks] = useState([]);
  const [imageError, setImageError] = useState('');

  const openNotification = (placement: any, mess: string) => {
    notification.info({
      message: 'Success Admin!',
      description: mess,
      placement,
    });
  };

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
      <RadiusBottomrightOutlined />

      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          marketname: Yup.string()
            .min(2, 'Must be more than 1 characters')
            .max(255, 'Must be 255 characters or less')
            .required('Please provide market name'),
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
        onSubmit={async (
          values: MarketForm,
          {setSubmitting, resetForm},
        ): Promise<void> => {
          if (!imageLinks || imageLinks.length === 0 || imageLinks.length > 3) {
            setImageError('Please provide 3 images');
            return;
          }

          const payload = {
            name: values.marketname,
            latlng: `${values.lat},${values.lng}`,
            description: values.description,
            foodCategory: values.foodCategory,
          };

          setProcessing(true);

          await createMarket(
            {...payload, images: imageLinks},
            openNotification,
          );
          setProcessing(false);
          setSubmitting(false);
          resetForm({});
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
              />
              {formik.touched.marketname && formik.errors.marketname ? (
                <small style={{color: 'red'}}>{formik.errors.marketname}</small>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="foodCategory">Food Category</label>
              <Field
                as="select"
                name="foodCategory"
                className="form-control"
                placeholder="Enter food category"
              >
                <option disabled>Select Food Category</option>
                <option value="fruits">Fruits</option>
                <option value="sea food">Sea Food</option>
                <option value="general groceries">General Groceries</option>
                <option value="junk food">Junk Food</option>
                <option value="staples">Staples</option>
                <option value="meat">Meat</option>
              </Field>

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
  createMarket,
};

export default connect(null, mapDispatchToProps)(App);
