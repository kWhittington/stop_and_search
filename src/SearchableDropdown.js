import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import OptionalLabel from './OptionalLabel'


export default class SearchableDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datalist: props.datalist,
      label: props.label,
      placeholder: props.placeholder
    }
  }

  get datalist() {
    return this.state.datalist
  }

  get label() {
    return this.state.label
  }

  get placeholder() {
    return this.state.placeholder
  }

  render() {
    return(
      <div className='ui field'>
        <OptionalLabel text={this.label}/>
        <Dropdown placeholder={this.placeholder} search selection
          options={this.datalist}/>
      </div>)
  }
}
