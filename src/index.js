import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import getRootStore from './store';
import DashboardContainer from './DashboardContainer';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const rootStore = getRootStore(routerReducer, middleware);


class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Route path="/" component={DashboardContainer} />
      </ConnectedRouter>
    );
  }
}


ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);


// export default history;
