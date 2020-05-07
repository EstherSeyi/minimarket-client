import React from 'react';
import {render} from '@testing-library/react';
import Loading from './Loading';

test('renders loading spinner', () => {
  const {container} = render(<Loading />);
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
