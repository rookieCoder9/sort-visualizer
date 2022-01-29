
const delay=(time)=> {return  new Promise((resolve)=> setTimeout(resolve,time))}
var heights=[]
async function  insertion(speed){
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


  for (let i = 1;i< size; i++) {

    let current = parseInt(arr[i].style.height);

    let j = i - 1;

  
    while ((j >=0) && (current < (parseInt(arr[j].style.height)))) {
        arr[j+1].classList.add("selected")
        arr[j].classList.add("selected")
        await delay(speed);
    let h1=parseInt(arr[j].style.height)

    arr[ j + 1].style.height = h1 + "px";
         
        await delay(speed);
        
        arr[j].classList.remove("selected")
        arr[j+1].classList.remove("selected")
        await delay(speed);
        j=j-1;

    }
    
    arr[j+1].style.height = current + "px";
    arr[j+1].classList.remove("selected")

    await delay(speed);



}
heights=[]

for (let i=0;i<inputs.length;i++){
    inputs[i].disabled=false;
}
for (let i =0;i<header.length;i++){
    header[i].disabled=false
}

}
export default insertion
