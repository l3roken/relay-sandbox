
import * as React from 'react';
import { Link } from 'react-router';
import Dashboard from '../interfaces/dashboard'

interface DashboardNavigationProps extends React.Props<any> { 
    retailers: any;
    metrics?: any;
}
interface DashboardNavigationState extends React.Props<any> { }

class DashboardNavigation extends React.Component<DashboardNavigationProps, DashboardNavigationState> { 

    render() {
        
        const toolbar = {
            background: '#c9c9c9',
            width: 250,
            height: '100%',
            float: 'left'
        }

        return (
            <div style={toolbar}>
                { this.props.retailers }
            </div>
        )
    }
}

export default DashboardNavigation;