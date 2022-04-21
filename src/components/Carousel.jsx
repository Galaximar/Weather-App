import React, { useState } from "react";
import { Chart } from "react-google-charts";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function Carousel({data,width}) {
    let values=[<div>1</div>,<div>2</div>]
    let [chart,setChart] = useState(0);
  return (
      <div className={`${width==="sm"||width==="xs"?"graficoCel":"graficoCom"} containerCarousel`}>
          {data[chart]}
          <div className="btnCarousel">
          {chart?
          <button className="btnI" onClick={()=>setChart(--chart)}>{<ArrowBackIcon />}</button>
          :<button className="btnINo">{<ArrowBackIcon />}</button>
          }
          {chart+1<data.length?
          <button className="btnD" onClick={()=>setChart(++chart)}>{<ArrowForwardIcon />}</button>
          :<button className="btnDNo">{<ArrowForwardIcon />}</button>
          } {/*ver lo de button disabled*/ }
          </div>
          
      </div>
  );
}
