
import * as React from 'react';

interface MetricsComponentProps extends React.Props<any> { 

    // user: {
    //     metrics: Metric[]
    // }

}
interface MetricsComponentState extends React.Props<any> { }

class MetricsComponent extends React.Component<MetricsComponentProps, MetricsComponentState> { 
    render() {

        const style = {
            height: 100,
            margin: 10,
            background: '#4e4e4e',
            color: 'white',
            fontSize: '1.6em',
            textAlign: 'center'
        }

        return (
             <div />
        )
    }
}

export default MetricsComponent;