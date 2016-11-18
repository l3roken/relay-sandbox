import * as React from 'react'
import * as  Relay from 'react-relay'
import Retailers from '../components/retailers';
import User from './user'

export default Relay.createContainer( Retailers, {
    fragments: {
        user: () => Relay.QL`
            fragment on User {
                id
                retailers {
                    id
                    name
                    logo
                }
            }`}
});