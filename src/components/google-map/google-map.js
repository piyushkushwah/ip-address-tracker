import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import './google-map.css';
import icon from '../../assets/icon-location.svg';
import L from 'leaflet';

export default function GoogleMap(props) {

    let marker = React.createRef();

    const iconPerson = new L.Icon({
        iconUrl: icon,
        iconRetinaUrl: icon,
        iconAnchor: [17, 37],
        iconSize: new L.Point(38, 45),
        className: 'leaflet-icon'
    });

    function SetViewOnClick({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
        return null;
    }

    let position = [props.ipData !== null ? props.ipData.location.lat : 22.1542,
    props.ipData !== null ? props.ipData.location.lng : 77.0622];


    return (
        <div style={{ width: '100%', height: '65vh' }}>

            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}>

                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">
                    OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                    ref={marker}
                    icon={iconPerson}
                    position={position}>

                    <Popup>
                        {props.ipData !== null ?
                            props.ipData.location.city
                            : 'Welcome'}
                    </Popup>

                </Marker>
                <SetViewOnClick coords={position} />

            </MapContainer>

        </div >
    )
}
