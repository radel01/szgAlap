export function gombOsszeallit() {
  let txt = "";
  for (let index = 0; index < 10; index++) {
    txt += `<button id="id${index}">${index}</button>`;
  }
  console.log(txt);
  return txt;
}
gombOsszeallit();

const GOMBSECTION = document.getElementsByClassName("szamok");
GOMBSECTION[0].innerHTML = gombOsszeallit();

let gombELEMEK=document.querySelectorAll(".szamok button")

for (let index = 0; index < gombELEMEK.length; index++) {
    gombELEMEK[index].addEventListener("click",gombKattintasSzam);    
}
const KIFEJEZESELEM = document.getElementsByClassName("kifejezes")

function gombKattintasSzam(event){
    console.log(event.target)//az az elem ami kiváltja az eseményt
    for (let index = 0; index < 10; index++) {
        KIFEJEZESELEM[index].innerHTML+=event.target.innerHTML
    }
    
}
//művjelek
let gombELEMEKMuv=document.querySelectorAll(".muvjelek button")
for (let index = 0; index < gombELEMEKMuv.length; index++) {
  gombELEMEKMuv[index].addEventListener("click",gombKattintasMuv);    
}

function gombKattintasMuv(event){
  KIFEJEZESELEM[0].innerHTML+=event.target.innerHTML
  
}