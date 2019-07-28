import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import * as APIUtil from './util/api_util';

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
      zoom: 8,
      mapCenter: [34.854, 38.995]
    }
  }

  componentDidMount() {
    APIUtil.fetchConflicts().then(res => res.json()).then(data => { this.setState({conflicts: data.features})})
  }

  render() {
    return (
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
      </Map>
    )
  }
}

export default App;
