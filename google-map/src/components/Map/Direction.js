import React from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import API_KEY from './config';
import { useState } from 'react';
//npm install --save @react-google-maps/api


const containerStyle = {
    width: '100%',
    height: '400px'
};

const location = {
    lat: 23.861880,
    lng: 90.002574
};
const onLoad = marker => {
    console.log('marker: ', marker)
}
function Direction({ origin, direction }) {
    const [response, setResponse] = useState(null);
    return (
        <LoadScript googleMapsApiKey={API_KEY} >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={16}
            >
                <DirectionsService
                    options={{
                        destination: direction,
                        origin: origin,
                        travelMode: 'DRIVING'
                    }}
                    callback={res => {
                        if (res != null) {
                            setResponse(res);
                        }
                    }}
                />
                {
                    response && <DirectionsRenderer
                        options={{
                            directions: response
                        }}
                    />
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction);