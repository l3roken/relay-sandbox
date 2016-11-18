import * as Relay from 'react-relay'
import * as React from 'react';
import User from '../interfaces/user'

interface AddDashboardMutationProps extends React.Props<any> {
    user: any;
    input: {name: string, description: string};
 }
interface AddDashboardMutationState extends React.Props<any> { }

export default class AddDashboardMutation extends Relay.Mutation<AddDashboardMutationProps, AddDashboardMutationState> {

  getMutation () {
    return Relay.QL`mutation { addDashboard }`
  }

  getFatQuery () {
    return Relay.QL`
      fragment on User {
        dashboards {
          id
          name
          description
        }
      }
    `
  }

  getConfigs (): any {
    return [];
  }

  getVariables () {
    console.warn('INPUT', this.props.input);
    return this.props.input;
  }

  getOptimisticResponse () {
    return this.props.input;
  }
}