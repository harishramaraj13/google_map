// import React from "react";
// // import googleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap(){
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '100vh', width: '100%' }}>
//       <googleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyATWrqooTMq3YYMVji7tpL3Jl8ADVTugnM" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </googleMapReact>
//     </div>
//   );
// }


import { useRef, useEffect } from "react";

const AutoComplete = () => {
 const autoCompleteRef = useRef();
 const inputRef = useRef();
 const options = {
  componentRestrictions: { country: "ng" },
  fields: ["address_components", "geometry", "icon", "name"],
  types: ["establishment"]
 };
 useEffect(() => {
  autoCompleteRef.current = new window.google.maps.places.Autocomplete(
   inputRef.current,
   options
  );
 }, []);
 return (
  <div>
   <label>enter address :</label>
   <input ref={inputRef} />
  </div>
 );
};
export default AutoComplete;