import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'
import './App.css'
import AppBody from './AppBody.js'
import AppHeader from './AppHeader.js'

export default class App extends Component {
  render() {
    return(
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <AppHeader/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <AppBody/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
