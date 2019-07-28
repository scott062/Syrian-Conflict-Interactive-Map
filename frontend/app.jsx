import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

//Mapbox base map info
const accessToken = "pk.eyJ1Ijoic2NvdHQwNjIiLCJhIjoiY2p5bHpuczh4MGR4ZTNscXVyODltZXIzbCJ9.gdmp7BhGHT0YVUMFfgh_gg"
const tileUrl = 'https://api.tiles.mapbox/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
const maxZoom = 19

class App extends Component {

  constructor() {
    super();
    this.state = {
      zoom: 4,
      mapCenter: [34.8021, 38.9968]
    }
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
          id={'mapbox.satellite'}
          accessToken={accessToken}
        />
      </Map>
    )
  }
}

export default App;
