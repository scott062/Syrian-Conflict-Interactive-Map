import React, { Component } from 'react';
import { Image, Menu, Sidebar, Popup, Button, Icon } from 'semantic-ui-react';
import Filters from './Filters'
import filterIcon from '../../app/assets/filter-icon.png'

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Filters/>
      </div>

    )
  }
}

export default Navbar
