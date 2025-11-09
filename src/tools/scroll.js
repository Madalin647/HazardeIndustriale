export function Scroll(){
const carousel = document.querySelector('.Carousel');
const indl = document.querySelector('.ind-l') 

let scrollValue = carousel.scrollWidth/5;
let value = 0;
window.addEventListener('resize',()=>{
  const oldValue = scrollValue;
scrollValue = carousel.scrollWidth/5;
value = value/(oldValue/scrollValue);
})
indl.addEventListener('click',()=>{
  carousel.scrollTo({
    top:0,
    left:value-scrollValue,
  behavior:'smooth'
  })
   if(value <= 0){
    return
  }else{
value -= scrollValue;
  }
  console.log('scrollded')
})
const indr = document.querySelector('.ind-r') 


indr.addEventListener('click',()=>{
  carousel.scrollTo({
    top:0,
    left:value + scrollValue,
  behavior:'smooth'
  })
  if(value >= (carousel.scrollWidth/5)*4){
    return
  }else{
value += scrollValue;
  }
  
  console.log('scrollded')
})
}