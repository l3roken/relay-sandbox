
import * as React from 'react';
import { Link } from 'react-router';
import Dashboard from '../interfaces/dashboard'
import DashboardCard from './dashboard_card';
import BlankCard from './blank_card';

interface DashboardListProps extends React.Props<any> { 

    user: {
        dashboards: Dashboard[];
    }
    onCardClick: (id: string) => void;
    onEditCardClick: (id: string) => void;

}
interface DashboardListState extends React.Props<any> { }

class DashboardList extends React.Component<DashboardListProps, DashboardListState> { 
    constructor(props: DashboardListProps) {
        super(props);
    }

    handleCardClick = (id: string) => {
        if (this.props.onCardClick)
            this.props.onCardClick(id);
    }

    handleEditCardClick = (id: string) => {
        if (this.props.onEditCardClick)
            this.props.onEditCardClick(id);
    }

    render() {
        const style = {
            display: 'flex',
            padding: 20,
            flexWrap: 'wrap'
        }
        return (
            <div style={ style } >
                <BlankCard />
                { this.props.user.dashboards.map( d => <DashboardCard key={d.id} dashboard={d} onEditClick={ this.handleEditCardClick } onCardClick={ this.handleCardClick }/> ) }
            </div>
        )
    }
}

export default DashboardList;