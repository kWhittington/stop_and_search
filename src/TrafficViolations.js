import React, { Component } from 'react'
import { Container, Dropdown, Grid, Header } from 'semantic-ui-react'
import Validate from './Validate'

export default class TrafficViolations extends Component {
  render() {
    // @todo
    //  Needs to be [{ key: 'AL', value: 'AL', text: 'Alabama' }, ...] format
    //  but with days of the current month.
    this.datalist = [
      { key: 'a', value: 'a', text: 'a' }
    ]
    return(
      <Container className='TrafficViolations'>
        <Header as='h2' icon='car' content='Traffic Violations'/>
        <Grid container>
          <Dropdown placeholder='Day' search selection
            options={ this.datalist }/>
        </Grid>
      </Container>)
  }
}
