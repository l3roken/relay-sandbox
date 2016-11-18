import * as Relay from 'react-relay';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, applyRouterMiddleware, withRouter, IndexRoute } from 'react-router';
import User from './containers/user';
import DashboardCardList from './containers/dashboard_list';
import CreateDashboard from './containers/dashboard_create';
import UpdateDashboard from './containers/dashboard_update';
import Dashboard from './containers/dashboard';
import UserQuery from './containers/user';
import Retailers from './containers/retailers';

const useRelay = require('react-router-relay');

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:9001/graphql', null )
)




interface MainProps extends React.Props<any> { }
interface MainState extends React.Props<any> { }

class Main extends React.Component<MainProps, MainState> {
    render() {
        return (
            <Router history={browserHistory} 
            forceFetch
            render={applyRouterMiddleware(useRelay)} 
            environment={Relay.Store} >
                <Route path="/" component={ withRouter(DashboardCardList) } queries={ UserQuery } />
                <Route path="/dashboards/:id/retailers/:id" component={ withRouter(UpdateDashboard)  } queries={ UserQuery } />
                <Route path="/dashboards/create" component={ withRouter(CreateDashboard) } queries={ UserQuery }  />
                <Route path="/dashboards/:id" component={ withRouter(Dashboard) } queries={ UserQuery } />
                <Route path="/dashboards/edit/:id" component={ withRouter(UpdateDashboard) } queries={ UserQuery } />
            </Router>
        );
    }
 }


ReactDOM.render(<Main />, document.getElementById('root'));
