import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
            <Typography variant="h5" sx={{color:"white",position:"absolute",top:"50%",transform:"translateY(-50%)"}}>
            {name}
            </Typography>
            <div className='infoMC'>
                <Typography variant="body2" sx={{color:"white",position:"absolute",right:"100px",top:"50%",transform:"translateY(-50%)"}}>
                {temp} C°
                </Typography>
                <img src={img} alt="Weather image" />
            </div>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{position:"absolute",top:10,right:0, color:"white"}}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <div className='textInfo'>
                <Typography paragraph>
                    Latitude        
                </Typography>
                <Typography>
                    {latitud}
                </Typography>
            </div>
            <div className='textInfo'>
                <Typography paragraph>
                    Longitude       
                </Typography>
                <Typography>
                    {longitud}
                </Typography>
            </div>
            <div className='textInfo'>
                <Typography paragraph>
                    Wind     
                </Typography>
                <Typography>
                    {wind} km/h
                </Typography>
            </div>
            <div className='textInfo'>
                <Typography paragraph>
                    Weather    
                </Typography>
                <Typography>
                    {weather}
                </Typography>
            </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
