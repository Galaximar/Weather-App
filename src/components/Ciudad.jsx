import React from "react";
import { useParams } from "react-router-dom";
export default function Ciudad({city,myCitie}) {
    let {id}=useParams()
    function onFilter(ciudadId) {
        let ciudad = [myCitie,...city].filter(c => c.id === parseInt(ciudadId));
        if(ciudad.length > 0) {
            return ciudad[0];
        } else {
            return null;
        }
    }
    if(id!==undefined&&city) city=onFilter(id)
        return ( 
            <div className="ciudad">
                    {city&&<div className="container">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <div>Temperatura: {city.temp} ºC</div>
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.clouds}</div>
                            <div>Latitud: {city.latitud}º</div>
                            <div>Longitud: {city.longitud}º</div>
                        </div>
                    </div>}
            </div>
        )
}