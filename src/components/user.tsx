
import * as React from 'react';
import { Link } from 'react-router';
import User from '../interfaces/user'

interface UserComponentProps extends React.Props<any> { 

    user: User;

}
interface UserComponentState extends React.Props<any> { }

class UserComponent extends React.Component<UserComponentProps, UserComponentState> { 
    render() {
        return <Link to="/dashboards"><h1>{this.props.user.name}</h1></Link>
    }
}

export default UserComponent;