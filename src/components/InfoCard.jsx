import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './InfoCard.css'

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

export default function InfoCard({isNight,wind,weather,clouds,latitud,longitud,temp,min, max, name, img}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 250,color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`,background:`${!isNight?"rgb(255, 221, 225,.5)":"rgba(0,0,0,.7)"}` }}>
      <CardContent>
        <div>
          {isNight?
          <img className='day' src="https://media.istockphoto.com/photos/starry-peaceful-night-picture-id172667102?k=20&m=172667102&s=170667a&w=0&h=gi9n8F4-GPlszeOtMqzhKv6ooERr2Myu16-NTz3uVDo=" alt="night" />
          :<img className='day' src="https://png.pngtree.com/thumb_back/fw800/background/20200103/pngtree-trees-silhouette-on-orange-sky-background-vector-illustration-sunset-in-forest-image_326117.jpg" alt="day" />
          }
            <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}} variant="body2" color="text.secondary">
            {name}
            </Typography>
            <div>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}} variant="body2" color="text.secondary">
                {temp} C°
                </Typography>
                <img src={img} alt="Weather" />
            </div>
        </div>
        <div className='textInfo'>
            <div>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}} paragraph>
                    Min
                </Typography>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}}>
                    {min} C°  
                </Typography>
            </div>
            <div>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}} paragraph>
                    Max
                </Typography>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}}>
                    {max} C° 
                </Typography>
            </div>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton sx={{zIndex:"10"}} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{zIndex:"10",color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <div className='textInfo'>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}} paragraph>
                    Latitude        
                </Typography>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}}>
                    {latitud}
                </Typography>
            </div>
            <div className='textInfo'>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}} paragraph>
                    Longitude       
                </Typography>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}}>
                    {longitud}
                </Typography>
            </div>
            <div className='textInfo'>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}} paragraph>
                    Wind     
                </Typography>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}}>
                    {wind} km/h
                </Typography>
            </div>
            <div className='textInfo'>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}} paragraph>
                    Weather    
                </Typography>
                <Typography sx={{color:`${isNight?"white":"rgba(0, 0, 0, 0.6)"}`}}>
                    {weather}
                </Typography>
            </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
