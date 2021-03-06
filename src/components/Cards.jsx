import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({myCitie,cities,onClose}) {
  return (
    <div className='cards'>
      <div className='myCityContainer'>
        {myCitie?.status===200&&
          <Card
          id={myCitie.id}
          key={myCitie.id}
          max={myCitie.max}
          min={myCitie.min}
          name={myCitie.name}
          img={myCitie.img}
          isMyCity={true}
          temp={myCitie.temp}
          wind={myCitie.wind}
          weather={myCitie.weather}
          clouds={myCitie.clouds}
          latitud={myCitie.latitud}
          pressure={myCitie.pressure}
          humidity={myCitie.humidity}
          longitud={myCitie.longitud}
          onClose={() => onClose(myCitie.id)}
          isNight={myCitie.isNight}
          />
        }
      </div>
      {cities.map(c => <Card
          id={c.id}
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          temp={c.temp}
          wind={c.wind}
          pressure={c.pressure}
          humidity={c.humidity}
          weather={c.weather}
          clouds={c.clouds}
          latitud={c.latitud}
          longitud={c.longitud}
          onClose={() => onClose(c.id)}
          isNight={c.isNight}
        /> )}
    </div>
  );
}