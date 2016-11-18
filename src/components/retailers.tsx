
import * as React from 'react';
import Retailer from '../interfaces/retailer'

interface RetailersComponentProps extends React.Props<any> { 

    user: {
        retailers: Retailer[]
    }

}
interface RetailersComponentState extends React.Props<any> { }

class RetailersComponent extends React.Component<RetailersComponentProps, RetailersComponentState> { 
    render() {
        console.warn(this.props)
        const style = {
            height: 60,
            margin: 10,
            background: '#4e4e4e',
            color: 'white',
            fontSize: '1.6em',
            textAlign: 'center',
            padding: 20
        }

        return (
            <div>
                { this.props.user.retailers.map( r => {
                    return (
                        <div key={ r.id } style={style}>
                            <img style={ {maxHeight: '100%', maxWidth: '100%'}} src={ r.logo } />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default RetailersComponent;