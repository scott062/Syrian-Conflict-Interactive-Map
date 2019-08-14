import React, { Component } from 'react';
import { Sidebar, Segment, Form, Header, Divider, Button } from 'semantic-ui-react';
const actors = [
        {
            "key": "Military Forces of Syria (2000-)",
            "text": "Military Forces of Syria (2000-)",
            "value": "Military Forces of Syria (2000-)"
        },
        {
            "key": "Military Forces of Syria (2000-) Syrian Arab Air Force",
            "text": "Military Forces of Syria (2000-) Syrian Arab Air Force",
            "value": "Military Forces of Syria (2000-) Syrian Arab Air Force"
        },
        {
            "key": "Opposition Rebels (Syria)",
            "text": "Opposition Rebels (Syria)",
            "value": "Opposition Rebels (Syria)"
        },
        {
            "key": "Islamic State (Syria)",
            "text": "Islamic State (Syria)",
            "value": "Islamic State (Syria)"
        },
        {
            "key": "QSD: Syrian Democratic Forces",
            "text": "QSD: Syrian Democratic Forces",
            "value": "QSD: Syrian Democratic Forces"
        },
        {
            "key": "Unidentified Armed Group (Syria)",
            "text": "Unidentified Armed Group (Syria)",
            "value": "Unidentified Armed Group (Syria)"
        },
        {
            "key": "Military Forces of Turkey (2016-)",
            "text": "Military Forces of Turkey (2016-)",
            "value": "Military Forces of Turkey (2016-)"
        },
        {
            "key": "Allied Syrian and/or Russian Forces",
            "text": "Allied Syrian and/or Russian Forces",
            "value": "Allied Syrian and/or Russian Forces"
        },
        {
            "key": "Military Forces of Russia (2000-)",
            "text": "Military Forces of Russia (2000-)",
            "value": "Military Forces of Russia (2000-)"
        },
        {
            "key": "Military Forces of Syria (2000-) Prison Guards",
            "text": "Military Forces of Syria (2000-) Prison Guards",
            "value": "Military Forces of Syria (2000-) Prison Guards"
        },
        {
            "key": "QDW: National Defense Forces",
            "text": "QDW: National Defense Forces",
            "value": "QDW: National Defense Forces"
        },
        {
            "key": "Protesters (Syria)",
            "text": "Protesters (Syria)",
            "value": "Protesters (Syria)"
        },
        {
            "key": "HTS: Hayat Tahrir al Sham",
            "text": "HTS: Hayat Tahrir al Sham",
            "value": "HTS: Hayat Tahrir al Sham"
        },
        {
            "key": "Islamist Militia (Syria)",
            "text": "Islamist Militia (Syria)",
            "value": "Islamist Militia (Syria)"
        },
        {
            "key": "Military Forces of Syria (2000-) 5th Assault Corps",
            "text": "Military Forces of Syria (2000-) 5th Assault Corps",
            "value": "Military Forces of Syria (2000-) 5th Assault Corps"
        },
        {
            "key": "Jaysh al Izza",
            "text": "Jaysh al Izza",
            "value": "Jaysh al Izza"
        },
        {
            "key": "Rioters (Syria)",
            "text": "Rioters (Syria)",
            "value": "Rioters (Syria)"
        },
        {
            "key": "Military Forces of Syria (2000-) Military Intelligence",
            "text": "Military Forces of Syria (2000-) Military Intelligence",
            "value": "Military Forces of Syria (2000-) Military Intelligence"
        },
        {
            "key": "Military Forces of Israel (2009-)",
            "text": "Military Forces of Israel (2009-)",
            "value": "Military Forces of Israel (2009-)"
        },
        {
            "key": "Sultan Murad Division",
            "text": "Sultan Murad Division",
            "value": "Sultan Murad Division"
        },
        {
            "key": "YPG: Peoples Protection Units",
            "text": "YPG: Peoples Protection Units",
            "value": "YPG: Peoples Protection Units"
        },
        {
            "key": "Sultan Suleiman Shah Brigade (Syria)",
            "text": "Sultan Suleiman Shah Brigade (Syria)",
            "value": "Sultan Suleiman Shah Brigade (Syria)"
        },
        {
            "key": "Global Coalition Against Daesh",
            "text": "Global Coalition Against Daesh",
            "value": "Global Coalition Against Daesh"
        },
        {
            "key": "QSD: Syrian Democratic Forces - Intelligence",
            "text": "QSD: Syrian Democratic Forces - Intelligence",
            "value": "QSD: Syrian Democratic Forces - Intelligence"
        },
        {
            "key": "Saraya Qasioun",
            "text": "Saraya Qasioun",
            "value": "Saraya Qasioun"
        },
        {
            "key": "Dar'a Popular Resistance",
            "text": "Dar'a Popular Resistance",
            "value": "Dar'a Popular Resistance"
        },
        {
            "key": "Ansar al Tawhid",
            "text": "Ansar al Tawhid",
            "value": "Ansar al Tawhid"
        },
        {
            "key": "JaS: Levant Front",
            "text": "JaS: Levant Front",
            "value": "JaS: Levant Front"
        },
        {
            "key": "Military Forces of Turkey (2016-) Gendarmerie",
            "text": "Military Forces of Turkey (2016-) Gendarmerie",
            "value": "Military Forces of Turkey (2016-) Gendarmerie"
        },
        {
            "key": "TIP: Turkistan Islamic Party",
            "text": "TIP: Turkistan Islamic Party",
            "value": "TIP: Turkistan Islamic Party"
        },
        {
            "key": "Military Forces of Syria (2000-) 4th Armored Division",
            "text": "Military Forces of Syria (2000-) 4th Armored Division",
            "value": "Military Forces of Syria (2000-) 4th Armored Division"
        },
        {
            "key": "Hezbollah",
            "text": "Hezbollah",
            "value": "Hezbollah"
        },
        {
            "key": "Militia (Pro-Iran)",
            "text": "Militia (Pro-Iran)",
            "value": "Militia (Pro-Iran)"
        }
    ];

class Filters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actor: '',
    }
    this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleFilter(this.state.actor);
  }
  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  render() {
    let actor = this.state.actor
    return (
      <Sidebar
        as={Segment}
        direction='right'
        animation='overlay'
        icon='labeled'
        visible={true}
        width='wide'
        style={{
          backgroundColor: 'rgb(80, 80, 80, 1)',
          zIndex: '5'
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
        <p style={{fontWeight: '300', color: 'grey'}}>LESS THAN 5</p>
        <p style={{fontWeight: '300', color: 'orange'}}>BETWEEN 5 AND 10</p>
        <p style={{fontWeight: '300', color: 'red'}}>GREATER THAN 10</p>
        <Form size='large'>
          <p style={{fontWeight: '700'}}>Actors Involved</p>
          <Form.Group widths='equal'>
            <Form.Select
              fluid options = {actors}
              value = {this.state.actor}
              placeholder = "Actors"
              onChange = {this.update('actor')}
              />
          </Form.Group>
        </Form>
        <Button type='submit'>
          Filter
        </Button>
        <Button>
          Reset
        </Button>
      </Sidebar>
    )
  }
}

export default Filters;
