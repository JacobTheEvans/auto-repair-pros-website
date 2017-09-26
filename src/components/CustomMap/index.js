import React from "react";
import GoogleMapCustom from "./CustomMap.js";
import "./Map.css";

let autoRepairData = {
  lat: 40.437102,
  lng: -109.499756,
  markers: [
    {
      position: {
        lat: 40.437102,
        lng: -109.499756
      },
      key: `Auto Repair Pros`,
      defaultAnimation: 2,
      label: "Auto Repair Pros",
      description: ""
    }
  ]
}

class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      key: null,
      width: 0,
      padding: 0,
      lat: 0,
      lng: 0
    };
  }
  render() {
    return (
      <section className="col-2 map-overflow">
        <GoogleMapCustom lat={autoRepairData.lat} lng={autoRepairData.lng} containerElement={< div style = {{ height: `450px`, "width": "100%"}}/>} mapElement={< div style = {{ height: `100%`, width: "100%" }}/>} onMapLoad={() => {}} onMapClick={() => {}} markers={autoRepairData.markers} onMarkerRightClick={() => {}}/>
      </section>
    );
  }
}

export default MapContainer;
