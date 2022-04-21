import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CiudadInfo from "./CiudadInfo";
import './Ciudad.css'
import Typography from '@mui/material/Typography'
import AboutMeBtn from "./AboutMeBtn";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Grafico } from "./Grafico";
import {withWidth} from "@material-ui/core"
import { Carousel } from "./Carousel";


export default withWidth() (function Ciudad({width}) {
    let {id}=useParams()
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    const [city,setCity] = useState({});

    const date=(text)=>{
        let months=["January","February","March","April","May","June","July","Agost","September","Octover","November","December"];
        let j;
        let result=[];
        let textArr=text.split("");
        textArr.find((t,i)=>{
            if(t==="-"){
                j=i
                return true
            }
            return false
        })
        result[0]=months[text.slice(j+1,j+3)*1-1];
        result[1]=`${text[j+4]}${text[j+5]&&text[j+5]}`
        result[2]=text[j+5]?text.slice(j+7):text.slice(j+6)
        return result
    }
    const dataChart=(option)=>{
        let data=[];
        city.list?.forEach(c=>{
            let day=date(c.dt_txt)[2].slice(0,2)/24
            data=[...data,[date(c.dt_txt)[1]*1+day,option==="temp"?c.main.temp:c.main.pressure]]
        })
        return data;
    }
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
            {city.list?.length&&<Carousel width={width} data={[
            <div className="graficoContainer"><Grafico title="Temperature vs Day" axis="Days" ordenada="Temperature [C°]"  values={dataChart("temp")}/></div>,
            <div className="graficoContainer"><Grafico title="Pressure vs Day" axis="Days" ordenada="Pressure [hPa]"  values={dataChart()}/></div>
            ]}/>}
            {city.list?.map((c,i)=>
            <CiudadInfo key={i} c={c} />
            )}
        </div>
    )
})