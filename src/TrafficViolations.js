import '@blueprintjs/core/dist/blueprint.css'
import '@blueprintjs/datetime/dist/blueprint-datetime.css'
import 'react-addons-css-transition-group'
import { DateRangeInput } from '@blueprintjs/datetime'
import React, { Component } from 'react'
import { Container, Form, Grid, Header, Label } from 'semantic-ui-react'
import Date from './Date'
import TVCountInRangeRequest from './TrafficViolationCountInRangeRequest'

export default class TrafficViolations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: '...', endDate: Date.now(), startDate: Date.startOfMonth() }
    this.updateCount(this.startDate, this.endDate)
  }

  get count() {
    if (!this.startDate || !this.endDate) { return '...' }
    return this.state.count
  }

  get endDate() {
    return this.state.endDate
  }

  // Needs to be binded to `this`
  // (see https://reactjs.org/docs/handling-events.html).
  onDateRangeChange = (selectedRange) => {
    const [newStartDate, newEndDate] = selectedRange.map((date) => (
      date && new Date({ year: date.getFullYear(), month: date.getMonth() + 1,
        day: date.getDate() })
    ))
    this.updateCount(newStartDate, newEndDate)

    this.setState({
      endDate: newEndDate,
      selectedEndDate: selectedRange[1],
      selectedStartDate: selectedRange[0],
      startDate: newStartDate
    })
  }

  get startDate() {
    return this.state.startDate
  }

  updateCount(startDate, endDate) {
    new TVCountInRangeRequest({
      startDate: startDate, endDate: endDate,
      onSuccess: (count) => {
        this.setState((prevState, props) => ({ count: count }))
      }}).submit()
  }

  render() {
    return(
      <Container className='TrafficViolations'>
        <Header as='h2' content='Traffic Violations' icon='car'/>
        <Grid container>
          <Grid.Row>
            <Grid.Column width={4}>
              <Form>
                <Form.Field
                  control={DateRangeInput}
                  label='In Date Range'
                  allowSingleDayRange='true' className='field'
                  contiguousCalendarMonths='false'
                  endInputProps={{
                    rightElement: <Label attached='top right' tag>End</Label> }}
                  onChange={this.onDateRangeChange}
                  startInputProps={{
                    rightElement: <Label attached='top right' tag>Start</Label>
                  }}
                  value={[this.startDate.toJSDate(), this.endDate.toJSDate()]}
                  />
              </Form>
            </Grid.Column>
            <Grid.Column textAlign='center' verticalAlign='middle' width={6}>
              <div className='ui huge horizontal statistic'>
                <div className='value'>{this.count}</div>
                <div className='label'>Total</div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>)
  }
}
