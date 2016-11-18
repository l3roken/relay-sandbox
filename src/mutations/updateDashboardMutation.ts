import * as Relay from 'react-relay'
import * as React from 'react';
import User from '../interfaces/user'

interface AddDashboardMutationProps extends React.Props<any> {
    user: any;
    input: {id: string, name: string, description: string};
 }
interface AddDashboardMutationState extends React.Props<any> { }

export default class UpdatePokemonMutation extends Relay.Mutation<AddDashboardMutationProps, AddDashboardMutationState> {

  getMutation () {
    return Relay.QL`mutation{updateDashboard}`
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
    return this.props.input;
  }

  getOptimisticResponse () {
    return {
      model: this.props.input
    }
  }
}
