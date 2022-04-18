import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './InfoMyCity.css'
import {withWidth} from "@material-ui/core"
import { Link } from 'react-router-dom';

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

export default withWidth() (function InfoCard({id,pressure,humidity,width,wind,weather,clouds,latitud,longitud,temp,min, max, name, img}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{width: "100%", background:"rgba(0,0,0,.7)", position:"relative"}}>
      <CardContent>
        <div className='infoMC'>
            <Typography variant={`${width==="xs"?"h8":"h5"}`} sx={{height:`${width==="xs"?"10px":"0px"}`,color:"white",mt:`${width==="xs"?"-5px":"-10px"}`}}>
              <Link to={`city/${id}`}>{name}</Link>
            </Typography>
            <div className='infoMC'>
                <Typography variant="body2" sx={{height:0,color:"white",mt:"0px"}}>
                {temp} C°
                </Typography>
                <img src={img} alt="Weather" />
            </div>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{position:"absolute",top:7,right:0, color:"white"}}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <div className='textInfo'>
                <Typography sx={{color:"white"}} paragraph>
                    Latitude        
                </Typography>
                <Typography sx={{color:"white"}}>
                    {latitud}
                </Typography>
            </div>
            <div className='textInfo'>
                <Typography sx={{color:"white"}} paragraph>
                    Longitude       
                </Typography>
                <Typography sx={{color:"white"}}>
                    {longitud}
                </Typography>
            </div>
            <div className='textInfo'>
                <Typography sx={{color:"white"}} paragraph>
                    Wind     
                </Typography>
                <Typography sx={{color:"white"}}>
                    {wind} m/s
                </Typography>
            </div>
            <div className='textInfo'>
                <Typography sx={{color:"white"}} paragraph>
                    Weather    
                </Typography>
                <Typography sx={{color:"white"}}>
                    {weather}
                </Typography>
            </div>
            <div className='textInfo'>
                <Typography sx={{color:"white"}} paragraph>
                    Pressure    
                </Typography>
                <Typography sx={{color:"white"}}>
                    {pressure} hPa
                </Typography>
            </div>
            <div className='textInfo'>
                <Typography sx={{color:"white"}} paragraph>
                    Humidity    
                </Typography>
                <Typography sx={{color:"white"}}>
                    {humidity} %
                </Typography>
            </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
)