import React, { Component } from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import SearchableDropdown from './SearchableDropdown'

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
          <SearchableDropdown datalist={this.datalist} placeholder='Day'/>
        </Grid>
      </Container>)
  }
}
