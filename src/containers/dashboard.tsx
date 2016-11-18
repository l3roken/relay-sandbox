import * as React from 'react'
import * as  Relay from 'react-relay'
import Dashboard from '../components/dashboard';
import User from '../interfaces/user'
import DashboardNavigation from '../containers/dashboard_navigation';

interface DashboardWrapperProps extends React.Props<any> { 
    user: User;
    router: any;
}
interface DashboardWrapperState extends React.Props<any> { }

class DashboardWrapper extends React.Component<DashboardWrapperProps, DashboardWrapperState> { 

    render() {
        return <Dashboard 
            retailers={ 
                <DashboardNavigation user={ this.props.user } /> 
            } 
            dashboard={ this.props.user.dashboard } />
    }
}


export default Relay.createContainer( DashboardWrapper, {
    initialVariables: {
      id: null
    },
    fragments: {
        user: () => Relay.QL`
            fragment on User {
                dashboard(id: $id){
                    id
                    name
                    description
                }
                ${ DashboardNavigation.getFragment('user')}
            }`}
});