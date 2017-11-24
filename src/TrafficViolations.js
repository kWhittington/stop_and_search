import React, { Component } from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import Date from './Date'
import DateSelector from './DateSelector'

export default class TrafficViolations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: Date.now()
    }
  }

  // Needs to be binded to `this`
  // (see https://reactjs.org/docs/handling-events.html).
  onStartDateChange = (newDate) => {
    console.log(`Old Date: ${this.startDate}`)
    this.setState({ startDate: newDate })
    console.log(`New Date: ${newDate}`)
  }

  get startDate() {
    return this.state.startDate
  }

  render() {
    return(
      <Container className='TrafficViolations'>
        <Header as='h2' icon='car' content='Traffic Violations'/>
        <Grid container>
          <DateSelector onChange={this.onStartDateChange}
            value={this.startDate}
            />
        </Grid>
      </Container>)
  }
}
