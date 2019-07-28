import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

//Mapbox base map info
const accessToken
const tileUrl
const attribution
const maxZoom 

class App extends Component {

  constructor() {
    super();
    this.state = {
      zoom: 12,
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
          id={'mapbox.dark'}
          accessToken={accessToken}
        />
      </Map>
    )
  }
}
