import * as React from 'react'
import * as  Relay from 'react-relay'
import User from '../interfaces/user'
import Retailers from '../containers/retailers';
import DashboardNavigation from '../components/dashboard_navigation';

interface DashboardNavigationWrapperProps extends React.Props<any> { 
    user: User;
}
interface DashboardNavigationWrapperState extends React.Props<any> { }

class DashboardNavigationWrapper extends React.Component<DashboardNavigationWrapperProps, DashboardNavigationWrapperState> { 

    render() {
        return <DashboardNavigation
            retailers={ 
                <Retailers user={ this.props.user } /> 
            } />
    }
}

export default Relay.createContainer( DashboardNavigationWrapper, {
    fragments: {
        user: () => Relay.QL`
            fragment on User {
                ${ Retailers.getFragment('user')}
            }`}
});