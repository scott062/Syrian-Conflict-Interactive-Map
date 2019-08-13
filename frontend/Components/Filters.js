import React, { Component } from 'react';
import { Sidebar, Segment, Form, Header, Divider, Radio, Button } from 'semantic-ui-react';

class Filters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fatalities: '0',
      actors: '',
    }
  }
  render() {
    return (
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
        <Divider/>
        <p style={{fontWeight: '700'}}># of Reported Fatalities</p>
        <Form size='large'>
          <Form.Group inline>
            <Form.Field
              control={Radio}
              label='<5'
              value='<5'


              />
            <Form.Field
              control={Radio}
              label='5 < 10'
              value='5 < 10'


              />
            <Form.Field
              control={Radio}
              label='>10'
              value='>10'


              />
          </Form.Group>
          <p style={{fontWeight: '700'}}>Actors Involved</p>
          <Form.Group widths='equal'>
            <Form.Select
              fluid 
              value = "hi"
              placeholder = "Actors"
              />
          </Form.Group>
        </Form>

      </Sidebar>
    )
  }
}

export default Filters;
