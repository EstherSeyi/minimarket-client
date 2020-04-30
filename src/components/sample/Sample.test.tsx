import React from 'react';
import {render} from '@testing-library/react';
import Sample from './Sample';

test('renders Hello Koloo', () => {
  const {container} = render(<Sample />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <h1>
          Hello Koloo
        </h1>
      </div>
    </div>
  `);
});
