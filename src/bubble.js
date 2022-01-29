const delay=(time)=> {return  new Promise((resolve)=> setTimeout(resolve,time))}
async function  bubble(speed){
let arr=document.getElementsByClassName("bar")
let header=document.getElementsByTagName("button")
let inputs=document.getElementsByTagName("input")
for (let i=0;i<inputs.length;i++){
    inputs[i].disabled=true;
}
for (let i =0;i<header.length;i++){
    header[i].disabled=true
}

let size=arr.length;
for (let i=0;i<(size-1);i++){

for (let j=0;(j)<(size-i-1);j++){

    let barone=arr[j],bartwo=arr[j+1];
    barone.classList.add("selected")
  
    bartwo.classList.add("selected")
     await delay (speed)

     let h1=parseInt(barone.style.height),h2=parseInt(bartwo.style.height);

     if (h1>h2){
         barone.style.height=h2+'px';
         
         bartwo.style.height=h1+'px';
        }
        await delay (speed)
       
 barone.classList.remove("selected")
 bartwo.classList.remove("selected")
 await delay (speed)

}

}
for (let i=0;i<inputs.length;i++){
    inputs[i].disabled=false;
}
for (let i =0;i<header.length;i++){
    header[i].disabled=false
}

}

export default bubble