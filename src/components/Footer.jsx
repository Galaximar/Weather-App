import AboutMeBtn from './AboutMeBtn';
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'
import './Footer.css'
import {useLocation} from 'react-router-dom'

export default function Footer({cities}) {
const openLink=(link)=>{
  window.open(link)
}
const loc = useLocation().pathname[1];
  return (
      <div className={`${(!cities.length)&&!loc&&"fixed"} footer`}>
          <div onClick={()=>openLink("https://marcelogottardini.vercel.app/")}>
            <AboutMeBtn text={"Portfolio"} />
          </div> 
          <img className='linkedin' onClick={()=>openLink("https://linkedin.com/in/marcelogottardini/")} src={linkedin} alt="linkedin.com/in/marcelogottardini/"/>
          <img className='github' onClick={()=>openLink("https://github.com/Galaximar")} src={github} alt="github.com/Galaximar"/>
      </div>
  );
}
