import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

class AppHeader extends Component {
  render() {
    return(
      <Header as='h1' className='AppHeader'>
        NOLA Stop and Search Data
      </Header>)
  }
}

export default AppHeader
