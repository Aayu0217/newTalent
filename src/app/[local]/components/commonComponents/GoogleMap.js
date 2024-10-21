"use client"

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const GoogleMapAdd = () => {
    const [mapCenter] = useState({ lat: 22.7051394, lng: 75.9064978 });
    const mapStyles = {
        height: '350px',
        width: '100%',
    };

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={mapCenter}
            >
                <Marker position={mapCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapAdd;
