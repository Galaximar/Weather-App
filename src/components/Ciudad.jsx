import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CiudadInfo from "./CiudadInfo";
import './Ciudad.css'
import Typography from '@mui/material/Typography'
import AboutMeBtn from "./AboutMeBtn";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Ciudad() {
    let {id}=useParams()
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    const [city,setCity] = useState({});

    useEffect(()=>{
        fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${apiKey}`)
        .then(r=>r.json())
        .then((c)=>setCity({list:c.list,name:c.city.name}))
    },[id])
    return ( 
        <div>
            <div className="title">
                <div>
                    <Link to="/"><AboutMeBtn text={<ArrowBackIosIcon />} /></Link>
                </div>
                <Typography variant="h3" sx={{color:"white"}}>
                    {city.name}
                </Typography>
            </div>
            {city.list?.map((c,i)=>
            <CiudadInfo key={i} c={c} />
            )}
        </div>
    )
}