import * as React from 'react'
import * as  Relay from 'react-relay'
import User from '../components/user';

const UserQuery = { user: () => Relay.QL`query { user }` }

export default UserQuery;