import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function Carousel({data,width}) {
    let [chart,setChart] = useState(0);
  return (
      <div className={`${width==="sm"||width==="xs"?"graficoCel":"graficoCom"} containerCarousel`}>
          {data[chart]}
          <div className="btnCarousel">
          <button disabled={!chart} className="btnI" onClick={()=>setChart(--chart)}>{<ArrowBackIcon />}</button>
          <button disabled={!(chart+1<data.length)} className="btnD" onClick={()=>setChart(++chart)}>{<ArrowForwardIcon />}</button>
          </div>
      </div>
  );
}
