import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Homepage from './containers/homepage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
  </Route>
);
