import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

export default class AppBody extends Component {
  render() {
    return(
      <Grid.Row color='black'>
        <Grid.Column>
          { this.props.children }
        </Grid.Column>
      </Grid.Row>)
  }
}
