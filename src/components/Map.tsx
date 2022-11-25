import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useAppSelector } from '../redux/hooks';

const Map = () => {
    const position = {lat: 60.16821020042201, lng: 24.942212783748044}
    const places = useAppSelector((state) => state.placesReducer)
    useEffect(()=>{
        console.log(places)
    },[places])
    return (
        <MapContainer style={{ width: "100%", height: 500 }} center={position} zoom={13}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places ? places.map(place => {
                return (<Marker position={{lat: place.location.lat, lng: place.location.lon}}>
                            <Popup>
                                {place.name.en}
                            </Popup>
                        </Marker>)
            }): <></>}
        </MapContainer>
    )
}

export default Map