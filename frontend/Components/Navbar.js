import React, { Component } from 'react';
import { Image, Menu, Sidebar, Popup } from 'semantic-ui-react';
import filterIcon from '../../app/assets/images/white-controls.png';


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
        />
          <Popup trigger={
            <Menu.Item as='a'>
              <Image src={filterIcon} style={{width: '50%', margin: '10% auto'}}/>
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
