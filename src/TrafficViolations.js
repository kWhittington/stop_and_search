import React, { Component } from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'

export default class TrafficViolations extends Component {
  render() {
    return(
      <Container className='TrafficViolations'>
        <Header as='h2' icon='car' content='Traffic Violations'>
        </Header>
      </Container>)
  }
}
