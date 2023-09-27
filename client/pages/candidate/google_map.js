import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';
import {geocodeByAddress, getLatLng} from 'react-gpp'

function googleMapTesting() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -88 }), []);
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
      <Marker position={{ lat: 44, lng: -88 }} />
    </GoogleMap>
  );
}
export default googleMapTesting;
