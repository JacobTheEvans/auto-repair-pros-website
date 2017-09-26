import React from "react";
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const GoogleMapCustom = withGoogleMap((props) => (
  <GoogleMap ref={props.onMapLoad()} defaultZoom={15} defaultCenter={{
    lat: props.lat,
    lng: props.lng
  }} defaultOptions={{
    scrollwheel: false,
  }}>
    {props.markers.map((item, index) => {
      return (<Marker {...item}/>)
    })}
  </GoogleMap>
));

export default GoogleMapCustom;
