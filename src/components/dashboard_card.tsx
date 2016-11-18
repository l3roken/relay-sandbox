
import * as React from 'react';
import Dashboard from '../interfaces/dashboard'
import { Link } from 'react-router';

require('semantic-ui-icon/icon.css');

interface DashboardCardProps extends React.Props<any> { 
    onCardClick: (id: string) => void;
    onEditClick: (id: string) => void;
    dashboard: Dashboard;

}
interface DashboardCardState extends React.Props<any> { }

class DashboardCard extends React.Component<DashboardCardProps, DashboardCardState> { 

    handleCardClick = (event: React.MouseEvent) => {
        if (this.props.onCardClick) 
            this.props.onCardClick(this.props.dashboard.id);
    }

    handleEditClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        if (this.props.onEditClick) 
            this.props.onEditClick(this.props.dashboard.id);
            
    }

    render() {
        const style ={
            padding: 20,
            margin: 20,
            background: 'rgba(201, 201, 201, 0.37)',
            minWidth: 200,
            minHeight: 140,
            cursor: 'pointer'
        }

        return (
            <div style={ style } onClick={ this.handleCardClick } >
                
                    <div style={ {display: 'flex', justifyContent: 'flex-end'} }>
                        <i style={ {cursor: 'pointer' }} onClick={ this.handleEditClick } className="edit icon"></i>
                    </div>                
                    <h2>{this.props.dashboard.name}</h2>
                    <p>{this.props.dashboard.description}</p>               
            
            </div>
            
        )
    }
}

export default DashboardCard;