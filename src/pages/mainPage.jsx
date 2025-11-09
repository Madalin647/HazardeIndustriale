import { useEffect } from "react"
import { Scroll } from "../tools/scroll"

export default function MainPage(){
useEffect(()=>{
  Scroll()
},[])


return(
  <>
  <div className="cover"></div>
 <svg>
      <defs>
<clipPath id="image-cover" clipPathUnits="objectBoundingBox" >
      <path d="M 0,0.1 Q 0,0 0.1,0 L 0.9,0 Q 1,0 1,0.1 L 1,0.6 Q1,0.7 0.9,0.7 L 0.6,0.7 Q 0.5,0.7 0.5,0.8 L 0.5,0.9 Q 0.5,1 0.4,1 L 0.1,1 Q 0,1 0,0.9 Z" />
    </clipPath>
      </defs>
    </svg>
  <section className="top-section">
   
    
    <div className="top-image">
      <div className="slide"></div>
      <div className="slide"></div>
      <div className="slide"></div>
      <div className="slide"></div>
    </div>
    <div className="title">Hazarde Industriale</div>
  </section> 
  <section className="definitie">
<h1>Definitie</h1>
<p>Hazardele industriale reprezintă situații de risc apărute ca urmare a funcționării, manipulării, transportului sau depozitării substanțelor periculoase, energiei ori deșeurilor industriale, care pot conduce la accidente, explozii, incendii, emisii toxice sau contaminări.
</p>
<p> Pe scurt, ele reprezintă riscuri create de om (antropice), asociate cu producția, transportul, depozitarea sau utilizarea substanțelor periculoase.</p>
  </section>
  <section className="Cauze">
    <h1 className="cauze-titlu">Cauze</h1>
    <div className="Carousel">

<div className="slider s1">
  <h1 className="subtitlu">Manipularea gresita a substantelor periculoase</h1>
  <p className="explicatie">Reactii chimice necontrolate, scurgeri, explozii</p>
</div>
<div className="slider">
  <h1 className="subtitlu">Lipsa masurilor de protectie si control</h1>
  <p className="explicatie">Sisteme de alarmă sau ventilație insuficiente</p>
</div>
<div className="slider">
  <h1 className="subtitlu">Calamitati naturale</h1>
  <p className="explicatie">cutremure, inundații sau furtuni care pot declanșa accidente industriale secundare</p>
</div>
<div className="slider">
  <h1 className="subtitlu">Erori umane</h1>
  <p className="explicatie">Neglijenta, lipsa instruirii, nerespectarea normelor de siguranta</p>
</div>
<div className="slider s5">
  <h1 className="subtitlu">Defectiuni tehnice</h1>
  <p className="explicatie">Echipamente uzate, instalatii defecte, lipsa intretinerii</p>
</div>
</div>

<button className="ind ind-l"></button>
<button className="ind ind-r"></button>
  </section>
  </>
)
  
};