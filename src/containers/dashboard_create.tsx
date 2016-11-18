import * as React from 'react'
import * as  Relay from 'react-relay'
import DashboardForm from '../components/dashboard_form';
import User from '../interfaces/user'
import AddDashboardMutation from '../mutations/AddDashboardMutation'

interface DashboardCreateWrapperProps extends React.Props<any> { 
    user: any;
    router: any;
}
interface DashboardCreateWrapperState extends React.Props<any> { }

class DashboardCreateWrapper extends React.Component<DashboardCreateWrapperProps, DashboardCreateWrapperState> { 

    addDashboard = (values: {name: string, description: string}) => {
        console.warn(this.props.user);
            Relay.Store.commitUpdate(
        new AddDashboardMutation( {user: this.props.user, input: values} ),
            {
                onSuccess: () => this.props.router.push('/'),
                onFailure: (transaction) => console.error(transaction),
            }
        )
    }

    render() {
        return <DashboardForm onSave={this.addDashboard} 
                onCancel={ ()=> {
                    this.props.router.push('/');
                }} />
    }
}

export default Relay.createContainer( DashboardCreateWrapper, {
    fragments: {
        user: () => Relay.QL`
            fragment on User {
                id
                name
            }`}
});