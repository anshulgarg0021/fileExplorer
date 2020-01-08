import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import {
  ConnectedRouter,
  routerMiddleware,
} from 'connected-react-router';
import {routerReducer} from 'react-router-redux';
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
        {/* <Route path="/" component={DashboardContainer} /> */}
        s
      </ConnectedRouter>
    );
  }
}


ReactDOM.render(
  <Provider store={rootStore}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" render={()=><div>some</div>} />
      </Switch>

    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);


// export default history;
