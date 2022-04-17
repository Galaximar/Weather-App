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

export default function InfoCard({wind,weather,clouds,latitud,longitud,temp,min, max, name, img}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{width: "100%", background:"rgba(0,0,0,.7)", position:"relative"}}>
      <CardContent>
        <div className='infoMC'>
            <Typography variant="h5" sx={{height:0,color:"white",mt:"-10px"}}>
            {name}
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
                    {wind} km/h
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
        </CardContent>
      </Collapse>
    </Card>
  );
}
