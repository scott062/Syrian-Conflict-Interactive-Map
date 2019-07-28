import React, { Component } from 'react';
import { Sidebar, Segment, Form, Header, Divider, Radio, Button } from 'semantic-ui-react';

class Filters extends Component {

  render() {
    <Sidebar
      as={Segment}
      direction='right'
      animation='overlay'
      icon='labeled'
      visible={true}
      width='very wide'
      style={{
        backgroundColor: 'grey',
        zIndex: '5',
        paddingRight: '9%'
      }}
    >
      <Header
        as="h1"
        size="huge"
        >
        Filter Events
      </Header>

    </Sidebar>
  }
}

export default Filters;
