
import * as React from 'react';
import { Link } from 'react-router';
import Dashboard from '../interfaces/dashboard'

interface DashboardComponentProps extends React.Props<any> { 
    dashboard: Dashboard;
    retailers: any;
}
interface DashboardComponentState extends React.Props<any> { }

class DashboardComponent extends React.Component<DashboardComponentProps, DashboardComponentState> { 

    render() {

         const flexContainer = {
            display: 'flex'
        }

        const wrapper = {
           height: '100%',
           overflow: 'scroll',
           background: 'rgba(201, 201, 201, 0.37)'
        }
        
        const toolbar = {
            background: '#c9c9c9',
            width: 250,
            height: '100%',
            float: 'left'
        }

        const link ={
            textDecoration: 'none'
        }

        const header = {
            fontSize: '1.6em',
        }

        return (
            <div style={ wrapper } >
                <div style={toolbar}>
                    { this.props.retailers }
                </div>
                <div style={ flexContainer } >
                    
                    <div style={ {display: 'flex', flexFlow: 'column', padding: 20}} >
                        <div style={header}>{ this.props.dashboard.name }</div>
                        <div style={ {display: 'flex', flexDirection: 'column'}}> content </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardComponent;