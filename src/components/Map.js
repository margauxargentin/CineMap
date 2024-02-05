import React from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../media/marker.svg';
import transparentMarkerIcon from '../media/marker-transparent.svg'
import data from '../backend.json';

// Fix marker default icon
let defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [30, 80]
});

let transparentIcon = L.icon({
  iconUrl: transparentMarkerIcon,
  iconSize: [30, 80]
})

L.Marker.prototype.options.icon = defaultIcon;


const positions = data.Waypoints

class Map extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currPosIndex: 0,
    }
  }

  render() {
    const { currPosIndex } = this.state;
    return (
      <div className='Map'>
        <MapContainer center={positions[currPosIndex]} zoom={3} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {positions.map((item, index) => (
            <Marker
              key={index}
              position={[item.lat, item.lng]}
              icon={index === this.state.currPosIndex ? defaultIcon : transparentIcon}
              eventHandlers={{
                click: (e) => {
                  this.setCurrentMarker(e, index)
                },
              }}>
              <Popup>
                <p>{item.label}</p>
                <button type="button">Go</button>
              </Popup>
            </Marker>
          ))}

        </MapContainer>
      </div>
    );
  }

  setCurrentMarker(e, index) {
    this.setState({ currPosIndex: index });
    e.target.setIcon(defaultIcon);
  }

};

export default Map;