import React, { Component } from 'react';
import { Image, Menu, Sidebar, Popup, Button, Icon } from 'semantic-ui-react';
import Filters from './Filters'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { filterShow: false }
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter() {
    this.setState({ filterShow: !this.state.filterShow })
  }

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
      <Filters/>
      </div>

    )
  }
}

export default Navbar
