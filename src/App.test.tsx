import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {container} = render(<App />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="App"
      >
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
              class="css-1hwqqnv"
            />
          </div>
        </div>
      </div>
    </div>
  `);
});
