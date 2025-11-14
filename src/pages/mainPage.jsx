import { useEffect } from "react"
import { Scroll } from "../tools/scroll"

export default function MainPage(){
useEffect(()=>{
  Scroll()
},[])



useEffect(()=>{
  contentSelect(1)
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
  <section className="probleme-modalitati">
    <div className="obj-select">
      <div>
<button className="select-button " onClick={()=>{contentSelect(1)}} >Probleme provocate</button>
<div id="P-selected" className="selecter" hidden></div>
      </div>
<div>
<button className="select-button " onClick={()=>{contentSelect(2)}} >Comabatere si prevenire</button>
<div id="M-selected" className="selecter" hidden></div>
</div>

    </div>
<div className=" pm-container" id="probleme" hidden>
  <div className="content-probleme">
<p>Poluarea aerului, apei si solului</p>
<p>Afectarea sanatatii populatiei</p>
<p>Distrugeri materiale</p>
<p>Impact socio-economic</p>
<p>Efecte de lunga durata asupra mediului</p>
  </div>
</div>
<div className=" pm-container" id="modalitati" hidden>
  <div className="content-modalitati">
<p>Respectarea legislatiei si normelor de siguranta</p>
<p>Monitorizarea permanenta a instalatiilor</p>
<p>Planuri de urgenta si evacuare</p>
<p>Depozitarea corecta a substantelor periculoase</p>
<p>Tehnologii ecologice si modernizarea proceselor industriale</p>
  </div>
</div>
  </section>
  <section className="exemple">
    <div className="menu" id="menu" > <div className="positioner"><button onClick={()=>{hide()}}>Exemple</button>
      </div>
      </div>
<div id="player" hidden>
 <div className="player" >
      
      <div className="vselect">
      <button 
      onClick={()=>{videoSelect(1)}} 
      className="vsOption"> <div className="vsImg vsi1"></div>Cernobyl </button>
      <button
      onClick={()=>{videoSelect(2)}} 
      className="vsOption"> <div className="vsImg vsi2"></div>Bhopal </button>
      <button
      onClick={()=>{videoSelect(3)}} 
      className="vsOption"> <div className="vsImg vsi3"></div>Beirut </button>
      <button
      onClick={()=>{videoSelect(4)}}  
      className="vsOption"> <div className="vsImg vsi4"></div> Baia Mare </button>
      </div>
<div className="video-container">
<div id="vc-caption"> <p>Selecteaza un exemplu prin bara din dreapta</p></div>

<div className="video" id="vCernobyl" hidden>
  <div className="description" id="dCernobyl">
  <div className="video-content cCover">
    <div className="vc-opacity">
<p className="vc-title">Cernobyl</p>
<p>Data: 26 aprilie 1986</p>
<p>Cauza: erori umane si defectiuni tehnice in timpul unui test de siguranta la reactorul 4</p>
<p>Tara de provenienta: Ucraina</p>
<p>Probleme create: Contaminare radioactiva masiva in Europa de Est,
mii de cazuri de cancer tiroidian si alte boli cauzate de radiatii</p>
<div className="video-play"><button className="vp-button" onClick={()=>{
  videoCloseOpen('dCernobyl','VCernobyl')}}/></div>
  </div>
  </div>
  </div>
  <div className="video-yt" id="VCernobyl" hidden>
    <button className="video-close" onClick={()=>{
  videoCloseOpen('VCernobyl','dCernobyl')}}></button>
<iframe className="video-css" width="100%" height="100%" src="https://www.youtube.com/embed/w8kwBAc_FrA?si=5cYyfUfX2WgYXD0u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share" referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe>
  </div>
  
 </div>

<div className="video" id="vBhopal" hidden>
  <div className="description" id="dBhopal">
  <div className="video-content bhCover">
    <div className="vc-opacity">
<p className="vc-title">Bhopal</p>
<p>Data: 3 decembrie 1984</p>
<p>Cauza: scurgerea de izocianat de metil (gaz toxic) dintr-un rezervor defect</p>
<p>Tara de provenienta: India</p>
<p>Probleme create: Moartea a peste 15.000 de persoane si intoxicatii severe la sute de mii de locuitori, poluarea solului si a apei, cu efecte de durata asupra mediului si sanatatii</p>
<div className="video-play"><button className="vp-button" onClick={()=>{
  videoCloseOpen('dBhopal','VBhopal')}}></button></div>
  </div>
  </div>
  </div> 
  <div className="video-yt" id="VBhopal" hidden>
    <button className="video-close" onClick={()=>{
  videoCloseOpen('VBhopal','dBhopal')}}></button>
<iframe className="video-css" width="100%" height="100%" src="https://www.youtube.com/embed/bxdm3JlN3lM?si=kLgTTq4qcHWK54EA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share" referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe>
  </div>
  </div>

<div className="video" id="vBeirut" hidden>
  <div className="description" id="dBeirut">
   <div className="video-content beCover">
    <div className="vc-opacity">
<p className="vc-title">Beirut</p>
<p>Data: 4 august 2020</p>
<p>Cauza: depozitare necorespunzatoare a 2.750 tone de azotat de amoniu intr-un depozit portuar</p>
<p>Tara de provenienta: Liban</p>
<p>Probleme create: Peste 200 de morti si peste 6.000 de raniti,
distrugerea a zeci de mii de cladiri si poluarea masiva a aerului</p>
<div className="video-play"><button className="vp-button" onClick={()=>{
  videoCloseOpen('dBeirut','VBeirut')}}></button></div>
  </div>
  </div>
  </div>
  <div className="video-yt" id="VBeirut" hidden>
    <button className="video-close" onClick={()=>{
  videoCloseOpen('VBeirut','dBeirut')}}></button>
<iframe className="video-css" width="100%" height="100%" src="https://www.youtube.com/embed/oKFupx9x0-k?si=EmWIKTqtfj1EGzw3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share" referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe>
  </div>
  </div>

<div className="video" id="vBaiaMare" hidden>
  <div className="description" id="dBaiaMare">
   <div className="video-content bmCover">
    <div className="vc-opacity">
<p className="vc-title">Baia Mare</p>
<p>Data: 30 ianuarie 2000</p>
<p>Cauza: ruperea unui baraj de decantare la uzina Aurul, care continea cianuri folosite in extragerea aurului</p>
<p>Tara de provenienta: Romania</p>
<p>Probleme create: Poluarea raurilor Lăpuș, Someș, Tisa si Dunăre,
distrugerea ecosistemelor acvatice si moartea in masa a pestilor</p>
<div className="video-play"><button className="vp-button" onClick={()=>{
  videoCloseOpen('dBaiaMare','VBaiaMare')}}></button></div>
  </div>
  </div>
  </div>
  <div className="video-yt" id="VBaiaMare" hidden>
    <button className="video-close"onClick={()=>{
  videoCloseOpen('VBaiaMare','dBaiaMare')}} ></button>
<iframe className="video-css" width="100%" height="100%" src="https://www.youtube.com/embed/Bp5Ht7FtsXk?si=yLhHKMJKMmWRCSaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share" referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe>
  </div>
  </div>
</div>

      </div>
</div>
   
  </section>
  </>
)
  
};

function contentSelect(x){
  const Probleme = document.getElementById('probleme')
const Modalitati = document.getElementById('modalitati')
  const pSelect = document.getElementById('P-selected')
const mSelect = document.getElementById('M-selected')
if (x == 1){
  Probleme.removeAttribute('hidden')
  Modalitati.setAttribute('hidden',true)
pSelect.removeAttribute('hidden')
  mSelect.setAttribute('hidden',true)
}else if(x == 2){
  Modalitati.removeAttribute('hidden')
  Probleme.setAttribute('hidden',true)
  mSelect.removeAttribute('hidden')
  pSelect.setAttribute('hidden',true)
}
}
function hide(){
      const menu = document.getElementById('menu');
      const player = document.getElementById('player')
      menu.setAttribute('hidden',true);
      player.removeAttribute('hidden')
    }
function videoSelect(x){
  const caption = document.getElementById('vc-caption')
  const Cernobyl = document.getElementById('vCernobyl')
const Bhopal = document.getElementById('vBhopal')
  const Beirut = document.getElementById('vBeirut')
const BaiaMare = document.getElementById('vBaiaMare')
caption.setAttribute('hidden',true)
if (x == 1){
  Cernobyl.removeAttribute('hidden')
  Bhopal.setAttribute('hidden',true)
Beirut.setAttribute('hidden',true)
  BaiaMare.setAttribute('hidden',true)
}if (x == 2){
  Cernobyl.setAttribute('hidden',true)
  Bhopal.removeAttribute('hidden')
Beirut.setAttribute('hidden',true)
  BaiaMare.setAttribute('hidden',true)
}
if (x == 3){
  Cernobyl.setAttribute('hidden',true)
  Bhopal.setAttribute('hidden',true)
Beirut.removeAttribute('hidden')
  BaiaMare.setAttribute('hidden',true)
}
if (x == 4){
  Cernobyl.setAttribute('hidden',true)
  Bhopal.setAttribute('hidden',true)
Beirut.setAttribute('hidden',true)
  BaiaMare.removeAttribute('hidden')}
}

function videoCloseOpen(clos,ope){
  const close = document.getElementById(clos);
  const open = document.getElementById(ope);
  open.removeAttribute('hidden');
  close.setAttribute('hidden',true);
   console.log(open.hasAttribute('hidden')); 
}
