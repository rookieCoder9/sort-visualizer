

function theme1(){
   const body= document.getElementsByTagName("body")[0]
const nav=document.getElementsByClassName("head")[0]
const button=document.getElementsByClassName("head-button")
const bararea=document.getElementsByClassName("bararea")[0]
const bar=document.getElementsByClassName("bar")
const link= document.getElementsByTagName("a")[0]
const footer=document.getElementsByClassName("footer")[0]
body.style.color="black"
 link.style.color="black"
body.style.background="white"
nav.style.background="lightgrey"
footer.style.background="lightgrey"
bararea.style.background="white"
bararea.style.setProperty('--bar-color', "#24A19C")

for (let t=0;t<bar.length;t++){
    bar[t].style.background="#24A19C";
}

for (let t=0;t<button.length;t++){
    button[t].style.background="lightgrey";
    button[t].style.color="black";
}
}
function theme2(){
    const body= document.getElementsByTagName("body")[0]
 const nav=document.getElementsByClassName("head")[0]
 const link= document.getElementsByTagName("a")[0]
 const button=document.getElementsByClassName("head-button")
 const bararea=document.getElementsByClassName("bararea")[0]
 const bar=document.getElementsByClassName("bar")
 const footer=document.getElementsByClassName("footer")[0]
 link.style.color="white"
 body.style.color="white"
 body.style.background="#4FBDBA"
 nav.style.background="#35858B"
 footer.style.background="#35858B"
 bararea.style.background="#4FBDBA"
 bararea.style.setProperty('--bar-color', "#AEFEFF")
 for (let t=0;t<bar.length;t++){
    bar[t].style.background="#AEFEFF";
}


 for (let t=0;t<button.length;t++){
     button[t].style.background="#35858B";
     button[t].style.color="white";
 }
 }

 function theme3(){
    const body= document.getElementsByTagName("body")[0]
 const nav=document.getElementsByClassName("head")[0]
 const link= document.getElementsByTagName("a")[0]
 const button=document.getElementsByClassName("head-button")
 const bararea=document.getElementsByClassName("bararea")[0]
 const bar=document.getElementsByClassName("bar")
 const footer=document.getElementsByClassName("footer")[0]
 body.style.color="white"
 link.style.color="white"
 body.style.background="#EDEDED"
 nav.style.background="#444444"
 footer.style.background="#444444"
 bararea.style.background="#EDEDED"
 bararea.style.setProperty('--bar-color', "#DA0037")
 
 for (let t=0;t<bar.length;t++){
     bar[t].style.background="#DA0037";
 }

 for (let t=0;t<button.length;t++){
     button[t].style.background="#444444";
     button[t].style.color="white";

 }
 }
 export {theme1,theme2,theme3}
