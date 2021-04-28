import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 23.810331,
  lng: 90.412521,
};
const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBK24gqed9E1GXTw0K9xuCzsbWq1GDHIcQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
