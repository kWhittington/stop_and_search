import React, { Component } from 'react'
import Date from './Date'
import OptionalLabel from './OptionalLabel'
import SearchableDropdown from './SearchableDropdown'

export default class DateSelector extends Component {
  get date() {
    return this.value
  }

  get day() {
    return this.date.day
  }

  get days() {
    if (this.props.days) return this.props.days
    return this.defaultDays
  }

  get defaultDay() {
    if (this.props && this.props.defaultDay) return this.props.defaultDay
    return this.defaultDate.day
  }

  get defaultDays() {
    return Date.daysIn({ year: this.year, month: this.month }).map((date) =>
      ({ key: date.day, text: date.day, value: date.day }))
  }

  get defaultMonth() {
    if (this.props && this.props.defaultMonth) return this.props.defaultMonth
    return this.defaultDate.month
  }

  get defaultMonths() {
    return Date.monthsOfTheYear().map((date) =>
      ({ key: date.month, text: date.monthName(), value: date.month }))
  }

  get defaultYears() {
    return [2011, 2012, 2013, 2014, 2015, 2016, 2017].map((year) =>
      ({ key: year, text: year, value: year }))
  }

  get month() {
    return this.props.value.month
  }

  set month(newMonth) {
    this.setState({ month: newMonth })
  }

  get months() {
    if (this.props.months) return this.props.months
    return this.defaultMonths
  }

  // Needs to be binded to `this`
  // (see https://reactjs.org/docs/handling-events.html).
  onChange = (newDate) => {
    if (typeof this.props.onChange !== 'function') return
    this.props.onChange(newDate)
  }

  // Needs to be binded to `this`
  // (see https://reactjs.org/docs/handling-events.html).
  onDayChange = (event, data) => {
    this.onChange(
      new Date({ year: this.year, month: this.month, day: data.value }))
  }

  // Needs to be binded to `this`
  // (see https://reactjs.org/docs/handling-events.html).
  onMonthChange = (event, data) => {
    this.onChange(
      new Date({ year: this.year, month: data.value, day: this.day }))
  }

  // Needs to be binded to `this`
  // (see https://reactjs.org/docs/handling-events.html).
  onYearChange = (event, data) => {
    this.onChange(
      new Date({ year: data.value, month: this.month, day: this.day }))
  }

  render() {
    return(
      <div>
        <OptionalLabel text={this.props.label} />
        <SearchableDropdown className='field'
          onChange={this.onDayChange}
          options={this.days}
          placeholder='Day'
          value={this.day}
          />
        <SearchableDropdown className='field'
          onChange={this.onMonthChange}
          options={this.months}
          placeholder='Month'
          value={this.month}
          />
        <SearchableDropdown className='field'
          onChange={this.onYearChange}
          options={this.years}
          placeholder='Year'
          value={this.year}
          />
      </div>)
  }

  get value() {
    return this.props.value
  }

  get year() {
    return this.date.year
  }

  get years() {
    if (this.props.years) return this.props.years
    return this.defaultYears
  }
}
