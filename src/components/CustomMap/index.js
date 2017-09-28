import React from "react";
import GoogleMapCustom from "./CustomMap.js";
import "./Map.css";

let autoRepairData = {
  lat: 40.437102,
  lng: -109.502,
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
      isMobile: false
    };
  }
  checkMobile = () => {
    let width = window.innerWidth || document.body.clientWidth;
    if (width <= 700) {
      this.setState(prevState => ({isMobile: true}));
    } else if (this.state.isMobile === true) {
      this.setState(prevState => ({isMobile: false}));
    }
  }
  componentDidMount() {
    this.checkMobile();
    window.onresize = (event) => this.checkMobile();
  }
  render() {
    if(this.state.isMobile) {
      return (
        <section className="col-2 map-overflow col-overgrow">
          <div className="address">
            <h3>Find Us At</h3>
            <p>1348 South</p>
            <p>1500 East</p>
            <p>Shop #2</p>
            <p>Vernal, UT 84078</p>
          </div>
          <GoogleMapCustom lat={autoRepairData.lat} lng={autoRepairData.lng} containerElement={< div style = {{ height: `450px`, "width": "100%"}}/>} mapElement={< div style = {{ height: `100%`, width: "100%" }}/>} onMapLoad={() => {}} onMapClick={() => {}} markers={autoRepairData.markers} onMarkerRightClick={() => {}}/>
        </section>
      );
    } else {
      return (
        <section className="col-2 map-overflow col-overgrow">
          <GoogleMapCustom lat={autoRepairData.lat} lng={autoRepairData.lng} containerElement={< div style = {{ height: `450px`, "width": "100%"}}/>} mapElement={< div style = {{ height: `100%`, width: "100%" }}/>} onMapLoad={() => {}} onMapClick={() => {}} markers={autoRepairData.markers} onMarkerRightClick={() => {}}/>
          <div className="address">
            <h3>Find Us At</h3>
            <p>1348 South</p>
            <p>1500 East</p>
            <p>Shop #2</p>
            <p>Vernal, UT 84078</p>
          </div>
        </section>
      );
    }

  }
}

export default MapContainer;
