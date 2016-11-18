
import * as React from 'react';

interface DashboardCreateProps extends React.Props<any> {
    onSave: (values: {name?: string, description?: string}) => void;
    onCancel: () => void;
    dashboard?: {
        name: string;
        description: string;
    }
 }
interface DashboardCreateState extends React.Props<any> {
    name?: string;
    description?: string;
 }

class DashboardCreate extends React.Component<DashboardCreateProps, DashboardCreateState> { 
    
    handleSave = () => {
        if (this.props.onSave)
            this.props.onSave(this.state);
    }

    handleCancel = () => {
        if (this.props.onCancel) 
            this.props.onCancel();
    }

    componentWillMount() {
        console.warn('PROPS', this.props);
        if (this.props.dashboard) {
            this.setState({
                name: this.props.dashboard.name,
                description: this.props.dashboard.description
            })
        }
    }

    render() {
        const wrapper = {
            width: '100%'
        }
        const container ={
            padding: 20,
            margin: 20,
            background: '#c9c9c9',
            display: 'flex',
            alignItems: 'stretch'
        }

        const buttons = {
            padding: 10,
            display: 'flex',
            alignItems: 'center'
        }

        const button = {
            padding: 10,
            background: 'gray',
            color: 'white',
            textAlign: 'center',
            width: 100,
            marginRight: 10,
            cursor: 'pointer'
        }

        const item = {
            width: '100%'
        }

        const inputStyle = {
            width: '94%',
            padding: 10,
            border: '1px',
            margin: 10
        }
        return (
            <div style={ wrapper } >
                <div style={ container } >
                    <div style={item}>
                  
                            <div>
                                <input onBlur={ (event: any) => { this.setState({name: event.target.value})}} 
                                    defaultValue={ this.state ? this.state.name : "" }
                                    style={ inputStyle } 
                                    type="text" id="name" 
                                    placeholder="Dashboard Name" />
                            </div>
                            <div>
                                <textarea defaultValue={this.state ? this.state.description : ""} onBlur={ (event: any) => { this.setState({description: event.target.value})}}
                                style={ inputStyle } rows={5} id="description" placeholder="Description">
                                </textarea>
                            </div>
                            <div style={buttons}>
                                <div style={button} onClick={ this.handleSave }>
                                    Save
                                </div>
                                <div style={button} onClick={this.handleCancel }>
                                    Cancel
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardCreate;