import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';

import {Container} from './index';
import store from '../../store';

test('renders app', () => {
  const {container} = render(
    <Provider store={store}>
      <Container />
    </Provider>,
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="container"
      />
    </div>
  `);
});
