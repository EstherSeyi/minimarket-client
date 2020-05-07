import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';

import App from '../CreateMarket';
import store from '../../../store';

test('renders createMarket form', () => {
  const {container} = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="ant-card ant-card-bordered"
      >
        <div
          class="ant-card-head"
        >
          <div
            class="ant-card-head-wrapper"
          >
            <div
              class="ant-card-head-title"
            >
              New Market
            </div>
          </div>
        </div>
        <div
          class="ant-card-body"
        >
          <span
            aria-label="radius-bottomright"
            class="anticon anticon-radius-bottomright"
            role="img"
          >
            <svg
              aria-hidden="true"
              class=""
              data-icon="radius-bottomright"
              fill="currentColor"
              focusable="false"
              height="1em"
              viewBox="64 64 896 896"
              width="1em"
            >
              <path
                d="M368 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-58-624h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm578 102h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm292 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm174 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm230 276h-56c-4.4 0-8 3.6-8 8v182c0 87.3-70.7 158-158 158H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h182c127 0 230-103 230-230V484c0-4.4-3.6-8-8-8z"
              />
            </svg>
          </span>
          <form
            class="form-horizontal m-t-30"
          >
            <div
              class="form-group"
            >
              <label
                for="username"
              >
                Market Name
              </label>
              <input
                class="form-control"
                name="marketname"
                placeholder="Enter market name"
                type="text"
                value=""
              />
            </div>
            <div
              class="form-group"
            >
              <label
                for="foodCategory"
              >
                Food Category
              </label>
              <select
                class="form-control"
                name="foodCategory"
                placeholder="Enter food category"
              >
                <option
                  disabled=""
                >
                  Select Food Category
                </option>
                <option
                  value="fruits"
                >
                  Fruits
                </option>
                <option
                  value="sea food"
                >
                  Sea Food
                </option>
                <option
                  value="general groceries"
                >
                  General Groceries
                </option>
                <option
                  value="junk food"
                >
                  Junk Food
                </option>
                <option
                  value="staples"
                >
                  Staples
                </option>
                <option
                  value="meat"
                >
                  Meat
                </option>
              </select>
            </div>
            <div
              class="form-group"
            >
              <label
                for="description"
              >
                Description
              </label>
              <textarea
                class="form-control"
                name="description"
                placeholder="Enter Description"
                type="text"
              />
            </div>
            <div
              class="form-group"
            >
              <label
                for="lat"
              >
                Latitude
              </label>
              <input
                class="form-control"
                name="lat"
                placeholder="Enter Latitude"
                type="text"
                value=""
              />
            </div>
            <div
              class="form-group"
            >
              <label
                for="lng"
              >
                Longitude
              </label>
              <input
                class="form-control"
                name="lng"
                placeholder="Enter Longitude"
                type="text"
                value=""
              />
            </div>
            <div
              class="form-group"
            >
              <label
                for="images"
              >
                Market Image
              </label>
              <br />
              <small>
                Tip: Select 3 images all at once.
              </small>
              <input
                class="form-control"
                multiple=""
                name="images"
                type="file"
              />
              <small
                style="color: red;"
              />
            </div>
            <div
              class="form-group "
            >
              <button
                class="btn btn-primary w-md waves-effect waves-light"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `);
});
