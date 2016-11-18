import * as React from 'react'
import * as  Relay from 'react-relay'
import DashboardList from '../components/dashboard_list';

import User from '../containers/user';

interface DashboardListWrapperProps extends React.Props<any> { 
    user: any;
    router: any;
}
interface DashboardListWrapperState extends React.Props<any> { }

class DashboardListWrapper extends React.Component<DashboardListWrapperProps, DashboardListWrapperState> { 

    handleCardClick = (id: string) => {
        console.warn('handle card click');
        this.props.router.push(`/dashboards/${id}`);
    }

    handleEditClick = (id: string) => {
        console.warn('handle edit click');
        this.props.router.push( `/dashboards/edit/${id}`);
    }

    render() {
        return <DashboardList onEditCardClick={ this.handleEditClick } onCardClick={ this.handleCardClick } user={ this.props.user }  />
    }
}

export default Relay.createContainer(
    DashboardListWrapper, 
    {
        fragments: {
            user: () => Relay.QL`
                fragment on User {
                    dashboards {
                        id
                        name
                        description
                    }
                }
        `,
    },
});