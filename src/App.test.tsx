import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';

import App from './App';
import store from './store';

test('renders app', () => {
  const {container} = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"
      >
        <div
          class="css-pzdxlx"
        >
          <div
            class="css-h7t4y2"
          />
          <div
            class="css-1b5ezdw"
          />
        </div>
      </div>
    </div>
  `);
});
