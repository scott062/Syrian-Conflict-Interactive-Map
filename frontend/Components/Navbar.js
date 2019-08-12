import React, { Component } from 'react';
import { Image, Menu, Sidebar, Popup, Button, Icon } from 'semantic-ui-react';
import Filters from './Filters'

class Navbar extends Component {
  state = {
    filterShow: false,
  }

  handleFilter = () => this.setState({ filterVisibility: !this.state.filterShow} )
  render() {
    return (
      <div>
        <Sidebar
          as={Menu}
          animation='overlay'
          direction='right'
          icon='labeled'
          inverted
          vertical
          visible={true}
          width='thin'
          basic
        />
      </div>

    )
  }
}

export default Navbar
