
import * as React from 'react';
import { Link } from 'react-router';

interface BlankCardProps extends React.Props<any> { }
interface BlankCardState extends React.Props<any> { }

class BlankCard extends React.Component<BlankCardProps, BlankCardState> { 
    render() {

         const style = {
            padding: 20,
            margin: 20,
            minWidth: 200,
            minHeight: 140,
            alignContent: 'center',
            textAlign: 'center',
            fontSize: '2em',
            border: '1px solid #c9c9c9',
            color: '#c9c9c9'
        }

        const link ={
            textDecoration: 'none'
        }

        return (
            <Link style={ link } to="/dashboards/create">
                <div style={ style } >
                    <h1>+</h1>
                </div>
            </Link>
        )
    }
}

export default BlankCard;