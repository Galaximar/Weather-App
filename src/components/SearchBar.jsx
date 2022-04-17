import React, { useState } from "react";
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import { LoadingButton } from '@mui/lab';
import ApartmentIcon from '@mui/icons-material/Apartment';
import {withWidth} from "@material-ui/core"

const btnStyle={
    width: "12%",
    height: "2.3em",
    margin: "0.5em",
    background: "black",
    color: "white",
    border: "none",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    '&:hover':{background:"black", color:"black"}
}
export default withWidth() (function SearchBar({onSearch,width}) {
  const [city, setCity] = useState("");
  const [searching,setSearching] = useState(false);
  if(searching){
    setTimeout(()=>setSearching(false),1000);
  }
  const searchCity=(e)=>{
    e.preventDefault()
    onSearch(city);
    setCity("");
    width!=="xs"&&setSearching(true);
  }
  return (
    <form className="search">
      <div className="input">
        <input
          className="searchInput"
          type="text"
          placeholder="City..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <span><SearchIcon /></span>
      </div>
      <LoadingButton
        loading={searching}
        loadingPosition="start"
        fullWidth 
        sx={{...btnStyle,visibility:`${width==="xs"?"hidden":"visible"}`}}
        type="submit"
        className="button"
        onClick={searchCity}
        startIcon={<ApartmentIcon />}
        variant='contained'
      >
        Add
      </LoadingButton>
    </form>
  );
})