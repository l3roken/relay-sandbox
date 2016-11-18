import * as React from 'react'
import * as  Relay from 'react-relay'
import DashboardForm from '../components/dashboard_form';
import User from '../interfaces/user'
import UpdateDashboardMutation from '../mutations/updateDashboardMutation'

interface DashboardUpdateWrapperProps extends React.Props<any> { 
    user: any;
    router: any;
}
interface DashboardUpdateWrapperState extends React.Props<any> { }

class DashboardUpdateWrapper extends React.Component<DashboardUpdateWrapperProps, DashboardUpdateWrapperState> { 

    updateDashboard = (values: {name: string, description: string}) => {
            console.warn(this.props.user);
            const updatePayload = {
                id: this.props.user.dashboard.id,
                name: values.name,
                description: values.description
            }
            console.warn(updatePayload);
            Relay.Store.commitUpdate(
        new UpdateDashboardMutation( {input: updatePayload, user: this.props.user}),
            {
                onSuccess: () => this.props.router.push('/'),
                onFailure: (transaction) => console.error(transaction),
            }
        )
    }

    render() {
        return <DashboardForm dashboard={this.props.user.dashboard} onSave={this.updateDashboard} 
                onCancel={ ()=> {
                    this.props.router.push('/');
                }} />
    }
}

export default Relay.createContainer( DashboardUpdateWrapper, {
     initialVariables: {
      id: null,
    },
    fragments: {
        user: () => Relay.QL`
            fragment on User {
                id
                name
                dashboard(id: $id){
                    id
                    name
                    description
                }
            }`}
});