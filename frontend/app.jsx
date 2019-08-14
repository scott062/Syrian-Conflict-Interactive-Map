import React, { Component } from 'react';
import { Segment, Sidebar } from 'semantic-ui-react';
import { Map, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import Filters from './Components/Filters';

//Mapbox base map info
const accessToken = "pk.eyJ1Ijoic2NvdHQwNjIiLCJhIjoiY2p5bHpuczh4MGR4ZTNscXVyODltZXIzbCJ9.gdmp7BhGHT0YVUMFfgh_gg"
const tileUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
const maxZoom = 19

class App extends Component {

  constructor() {
    super();
    this.state = {
      conflicts: [],
      actors: [],
      zoom: 8,
      mapCenter: [34.854, 38.995]
    }
    this.handleFilter = this.handleFilter.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.fetchConflicts = this.fetchConflicts.bind(this);
  }

  componentDidMount() {
    this.fetchConflicts()
  }

  fetchConflicts() {
    fetch('http://localhost:3000/api/conflicts')
    .then(res => res.json())
    .then( data => {
      this.setState({conflicts: data.features, actors: data.actors})
    })
  }

  handleFilter(actor) {
    let filteredResults = this.state.conflicts.filter(conflict =>
      (conflict.properties.actor == actor)
    )
    this.setState({conflicts: filteredResults})
  }

  handleReset() {
    this.fetchConflicts();
  }

  render() {
    let conflicts = this.state.conflicts
    return (
      <div>
        <Sidebar.Pushable
          as={Segment}
          style={{height: '100vh', overflow: 'hidden'}}
        >
        <Filters handleFilter={this.handleFilter} handleReset={this.handleReset}/>
        <Sidebar.Pusher
          style={{height: '100vh', color: 'green'}}>
        <Map
          ref={m => { this.leafletMap = m}}
          id="map"
          center={this.state.mapCenter}
          zoom={this.state.zoom}
          maxZoom={maxZoom}
          >
          <TileLayer
            attribution={attribution}
            url={tileUrl}
            id={'mapbox.dark'}
            accessToken={accessToken}
          />
        {conflicts.map(conflict => {
          let integer = conflict.properties.fatalities
          if (parseInt(integer) < 5) {
            return (
              <CircleMarker
                key={conflict.properties.id}
                color="grey"
                radius={5}
                center={[conflict.geometry.coordinates[1], conflict.geometry.coordinates[0]]}
                >
                <Popup key={`pop_${conflict.properties.id}`}>
                  <div>Notes: {conflict.properties.notes}</div>
                  <div>Fatalities: {conflict.properties.fatalities}</div>
                </Popup>
              </CircleMarker>
            )
          } else if (parseInt(integer) < 10) {
            return (
              <CircleMarker
                key={conflict.properties.id}
                color="orange"
                radius={5}
                center={[conflict.geometry.coordinates[1], conflict.geometry.coordinates[0]]}
                >
                <Popup key={`pop_${conflict.properties.id}`}>
                  <div>Notes: {conflict.properties.notes}</div>
                  <div>Fatalities: {conflict.properties.fatalities}</div>
                </Popup>
              </CircleMarker>
            )
          } else {
            return (
              <CircleMarker
                key={conflict.properties.id}
                color="red"
                radius={5}
                center={[conflict.geometry.coordinates[1], conflict.geometry.coordinates[0]]}
                >
                <Popup key={`pop_${conflict.properties.id}`}>
                  <div>Notes: {conflict.properties.notes}</div>
                  <div>Fatalities: {conflict.properties.fatalities}</div>
                </Popup>
              </CircleMarker>
            )
          }
        })}
        </Map>
      </Sidebar.Pusher>
      </Sidebar.Pushable>
      </div>
    )
  }
}

export default App;
