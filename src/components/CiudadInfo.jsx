import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './CiudadInfo.css'
import { Typography } from "@mui/material";
import {withWidth} from "@material-ui/core"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default withWidth() (function Ciudad({c,width}) {
    const [expanded, setExpanded] = useState(false);

    const windDirection=(deg)=>
        deg>0&&deg<10?"E"
        :deg>90&&deg<100?"N"
        :deg>180&&deg<190?"W"
        :deg>270&&deg<280?"S"
        :deg>0&&deg<90?"NE"
        :deg>90&&deg<180?"NW"
        :deg>180&&deg<270?"SW"
        :"SE"
        
    const date=(text)=>{
        let months=["January","February","March","April","May","June","July","Agost","September","Octover","November","December"]
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
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return ( 
        <div className={`${width==="xs"?"ciudadCel":null} ciudadContainer`}>
            <Card sx={{height:"auto",color:`${c.sys.pod==="n"?"white":"rgba(0, 0, 0, 0.6)"}`,background:`${c.sys.pod!=="n"?"rgb(255, 221, 225,.5)":"rgba(0,0,0,.7)"}`}}  key={c.dt}>
                <CardContent sx={{padding:0}}>
                    <div className='ciudadDate'>
                        {c.sys.pod==="n"?
                            <img className='ciudadDay' src="https://media.istockphoto.com/photos/starry-peaceful-night-picture-id172667102?k=20&m=172667102&s=170667a&w=0&h=gi9n8F4-GPlszeOtMqzhKv6ooERr2Myu16-NTz3uVDo=" alt="night" />
                            :<img className='ciudadDay' src="https://png.pngtree.com/thumb_back/fw800/background/20200103/pngtree-trees-silhouette-on-orange-sky-background-vector-illustration-sunset-in-forest-image_326117.jpg" alt="day" />
                        }
                        <div className='ciudadFlex'>
                            <img src={`http://openweathermap.org/img/wn/${c.weather[0].icon}@2x.png`} alt="weather" />
                            <p>{c.main.temp} C°</p>
                        </div>
                        <div className="ciudadTitle">
                            <Typography variant="h6">
                                {c.weather[0].main}
                            </Typography>
                        </div>
                        <div className="ciudadFecha">
                            <p>{date(c.dt_txt)[1]} {date(c.dt_txt)[0]}</p>
                            <p>{date(c.dt_txt)[2]}</p>
                        </div>
                    </div>
                </CardContent>
                <CardActions sx={{padding:0}} disableSpacing>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{color:`${c.sys.pod==="n"?"white":"rgba(0, 0, 0, 0.6)"}`}}
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent sx={{padding:0,height:"180px",mt:"-25px"}}>
                        <div className='ciudadInfo'>
                            <div>
                                <p>{c.weather[0].description}</p>
                            </div>
                            <div className="spaceBetween">
                                <p>Min</p>
                                <p>{c.main.temp_min} C°</p>
                            </div>
                            <div className="spaceBetween">
                                <p>Max</p>
                                <p>{c.main.temp_max} C°</p>
                            </div>
                            <div className="spaceBetween">
                                <p>Pressure</p>
                                <p>{c.main.pressure} hPa</p>
                            </div>
                            <div className="spaceBetween">
                                <p>Humidity</p>
                                <p>{c.main.humidity} %</p>
                            </div>
                            <div className="spaceBetween">
                                <p>Wind</p>
                                <p>{windDirection(c.wind.deg)} {c.wind.speed}m/s</p>
                            </div>
                            <div className="spaceBetween">
                                <p>Max wind</p>
                                <p>{c.wind.gust}m/s</p>
                            </div>
                        </div>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
})