import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import InfoCard from './InfoCard';
import InfoMyCity from './InfoMyCity'
export default function Card ({wind,weather,clouds,latitud,longitud,temp,min, max, name, img, onClose, id,isMyCity}) {
    return (
      <>
      {isMyCity?
      <div className='myCity'>
      <InfoMyCity
      temp={temp} 
      min={min} 
      max={max} 
      name={name} 
      img={"http://openweathermap.org/img/wn/"+img+"@2x.png"}
      wind={wind}
      weather={weather}
      clouds={clouds}
      latitud={latitud}
      longitud={longitud} 
      />
      </div>
      :<div className='containerInfoCard'>
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <InfoCard 
        temp={temp} 
        min={min} 
        max={max} 
        name={name} 
        img={"http://openweathermap.org/img/wn/"+img+"@2x.png"}
        wind={wind}
        weather={weather}
        clouds={clouds}
        latitud={latitud}
        longitud={longitud} 
        />
      </div>}
      </>
    );
};