import React from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import data from '../backend.json';
// Fix marker default icon
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;


const positions = data.Waypoints

class Map extends React.Component {

  constructor(props){
    super(props)
    this.currentPositionIndex = 0;
    this.first_position = positions[this.currentPositionIndex];

  }
  render() {
    return (
      <div className='Map'>
        <MapContainer center={this.first_position} zoom={3} scrollWheelZoom={false} style={{ height: '100%', width: '100%'}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {positions.map(item => (
            <Marker key={positions.indexOf(item)} position={[item.lat, item.lng]}>
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

  highlightMarkup(){
    
  }

};

export default Map;