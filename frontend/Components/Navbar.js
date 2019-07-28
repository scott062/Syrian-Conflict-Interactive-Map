import React, { Component } from 'react';
import { Image, Menu, Sidebar, Popup, Button, Icon } from 'semantic-ui-react';
import Filters from './Filters'

class Navbar extends Component {

  render() {
    return (
      <div>
        <Sidebar
          as={Menu}
          direction='right'
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          visible={true}
          width='thin'
          basic
        />
          <Popup trigger={
            <Menu.Item as='a' style={{width: '50%', margin: '10% auto'}}>
              <Button icon>
                <Icon name='filter' />
              </Button>
            </Menu.Item>
          }
          content='Filter Events'
          position='left center'
          basic
          />
      </div>

    )
  }
}

export default Navbar
