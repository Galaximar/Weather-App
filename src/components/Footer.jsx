import AboutMeBtn from './AboutMeBtn';
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'
import './Footer.css'

export default function Footer({cities}) {
const openLink=(link)=>{
  window.open(link)
}
  return (
      <div className={`${(!cities.length)&&"fixed"} footer`}>
          <div onClick={()=>openLink("https://marcelogottardini.vercel.app/")}>
            <AboutMeBtn text={"Portfolio"} />
          </div> 
          <img className='linkedin' onClick={()=>openLink("https://linkedin.com/in/marcelogottardini/")} src={linkedin} alt="linkedin.com/in/marcelogottardini/"/>
          <img className='github' onClick={()=>openLink("https://github.com/Galaximar")} src={github} alt="github.com/Galaximar"/>
      </div>
  );
}
