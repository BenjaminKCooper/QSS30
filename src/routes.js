import React from 'react';
import { Route, IndexRoute } from 'react-router';

import New from './containers/new';
import App from './components/app';
import Show from './containers/show_edit';
import Homepage from './containers/homepage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="posts/new" component={New} />
    <Route path="posts/:id" component={Show} />
  </Route>
);
