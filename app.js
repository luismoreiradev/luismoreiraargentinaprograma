const logo= document.querySelectorAll('#logo path');

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    
}

document.getElementById("agrandarLetra").onclick = agrandarTamanoLetra

function agrandarTamanoLetra() {
   
    document.getElementById("education").style.fontSize = "1.5em"
   document.getElementById("achicarLetra").style.display="block"
   document.getElementById("agrandarLetra").style.display="none"
}


document.getElementById("achicarLetra").onclick = achicarTamanoLetra

function achicarTamanoLetra() {
    document.getElementById("education").style.fontSize = "1em"
    document.getElementById("achicarLetra").style.display="none"
   document.getElementById("agrandarLetra").style.display="block"
}
