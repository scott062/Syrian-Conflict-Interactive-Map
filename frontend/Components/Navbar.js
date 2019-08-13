import React, { Component } from 'react';
import { Image, Menu, Sidebar, Popup, Button, Icon } from 'semantic-ui-react';
import Filters from './Filters'
import filterIcon from './fitler-icon.png'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { filterShow: false };
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
      <Popup trigger={
          <Menu.Item as='a' onClick={this.handleFilter}>
            <Image src='./filter-icon.png'/>
          </Menu.Item>
        }
        content='Filter Events'
        position='left center'
        basic
        />
      <Filters/>
      </div>

    )
  }
}

export default Navbar
