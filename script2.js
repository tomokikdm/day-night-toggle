const scene=document.getElementById("scene");
const handle=document.getElementById("handle");
const modeLabel=document.getElementById("modeLabel");
let inNight=false;

document.querySelector(".toggle-wrapper").addEventListener("click",()=>{
  inNight=!inNight;
  if(inNight){
    scene.classList.add("night");
    handle.style.left="62px";
    scene.style.background= "linear-gradient(to top, #000000, #0a0a2a)";
    modeLabel.textContent="Night Mode";
  }else{
    scene.classList.remove("night");
    handle.style.left="2px";
    scene.style.background= "linear-gradient(to top, #ffd27f, #ffe6c9)";
    modeLabel.textContent="Morning Mode";
  }
});

