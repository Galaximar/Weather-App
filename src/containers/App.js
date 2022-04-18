import React, { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';
import Footer from '../components/Footer';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  const [myCitie,setMyCitie] = useState({});
  const [position,setPosition] = useState(400);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>
      setPosition([position.coords.longitude,position.coords.latitude]),
      ()=>setPosition(400)
)
  },[])
  useEffect(()=>{
    position===400?setMyCitie({status:400})
    :fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position[1]}&lon=${position[0]}&units=metric&appid=${apiKey}`)
    .then(r=>r.json())
    .then(recurso=>{setMyCitie({
      min: Math.round(recurso.main.temp_min),
      max: Math.round(recurso.main.temp_max),
      img: recurso.weather[0].icon,
      id: recurso.id,
      wind: recurso.wind.speed,
      pressure: recurso.main.pressure,
      humidity: recurso.main.humidity,
      temp: recurso.main.temp,
      name: recurso.name,
      weather: recurso.weather[0].main,
      clouds: recurso.clouds.all,
      latitud: recurso.coord.lat,
      longitud: recurso.coord.lon,
      isNight: recurso.weather[0].icon[2]==="n",
      status:200
    })});
  },[position])

  useEffect(()=>{
    let citiesSaved=JSON.parse(localStorage.getItem("cities"));
    if(citiesSaved?.length&&!cities.length) setCities(citiesSaved);
    else localStorage.setItem("cities",JSON.stringify(cities));
  },[cities])
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
    let citiesSaved=JSON.parse(localStorage.getItem("cities"));
    localStorage.setItem("cities",JSON.stringify(citiesSaved.filter(c=>c.id!==id)))
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    if(!cities.find(c=>c.name.toLowerCase()===ciudad.toLowerCase()))
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            pressure: recurso.main.pressure,
            humidity: recurso.main.humidity,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            isNight: recurso.weather[0].icon[2]==="n"
          };
          !cities.find(c=>c.id===ciudad.id)&&setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route path="/" element={
        <div>
          <Nav onSearch={onSearch}/>
          <Cards cities={cities} myCitie={myCitie}  onClose={onClose}/>
        </div>}/>
        <Route path="/city/:id" element={<Ciudad />}/>
      </Routes>
      <Footer cities={cities} />
    </div>
  );
}

export default App;