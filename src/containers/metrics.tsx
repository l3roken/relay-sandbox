import * as React from 'react'
import * as  Relay from 'react-relay'
import Dashboard from '../components/dashboard';
import User from '../interfaces/user'
import Metrics from '../components/metrics';


export default Relay.createContainer( Metrics, {
    fragments: {
        user: () => Relay.QL`
            fragment on User {
                id
                reta
            }`}
});