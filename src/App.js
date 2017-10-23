import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import AppHeader from './AppHeader.js'
import './App.css'

class App extends Component {
  render() {
    return(
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <AppHeader>
            </AppHeader>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
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

export default App
