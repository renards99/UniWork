import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

function googleMapTesting() {
  const [address, setAddress] = useState('Bể bơi Huy Hùng, Tràng Đà, Tuyên Quang');

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <Map />
    </div>
  );
}
function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -88 }), []);
  return (
    <div>
      <GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
        <Marker position={{ lat: 44, lng: -88 }} />
      </GoogleMap>
    </div>
  );
}

export default googleMapTesting;
