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
import { CircularProgress } from "@mui/material";

export default withWidth() (function Ciudad({width}) {
    let {id}=useParams()
    const [city,setCity] = useState({});
    const { REACT_APP_API_KEY } = process.env;
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
            data=[...data,[date(c.dt_txt)[1]*1+day,option==="temp"?c.main.temp:option==="press"?c.main.pressure:option==="wind"?c.wind.speed:c.main.humidity]]
        })
        return data;
    }
    useEffect(()=>{
        fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${REACT_APP_API_KEY}`)
        .then(r=>r.json())
        .then((c)=>setCity({list:c.list,name:c.city.name}))
    },[id,REACT_APP_API_KEY])
    return ( 
        <div>
            {!city.list?<div className="loading"><div><CircularProgress size={100} color="warning" /></div></div>
            :<>
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
                <div className="graficoContainer"><Grafico title="Pressure vs Day" axis="Days" ordenada="Pressure [hPa]"  values={dataChart("press")}/></div>,
                <div className="graficoContainer"><Grafico title="Wind vs Day" axis="Days" ordenada="Wind [m/s]"  values={dataChart("wind")}/></div>,
                <div className="graficoContainer"><Grafico title="Humidity vs Day" axis="Days" ordenada="Humidity %"  values={dataChart()}/></div>
                ]}/>}
                <div className="cardsCiudadInfo">

                {city.list?.map((c,i)=>
                <CiudadInfo key={i} c={c} />
                )}
                </div>
            </>
            }
            
        </div>
    )
})