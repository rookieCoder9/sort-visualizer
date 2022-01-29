const delay=(time)=> {return  new Promise((resolve)=> setTimeout(resolve,time))}
var heights=[]
async function  quick_sort(speed){
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

for(let i=0;i<size;i++){
    heights.push(parseInt(arr[i].style.height))
}

await quickSort(0,size-1,arr,heights,speed)
heights=[]
for (let i=0;i<inputs.length;i++){
    inputs[i].disabled=false;
}
for (let i =0;i<header.length;i++){
    header[i].disabled=false
}

}




async function quickSort(low, high,arr,heights,speed) {
    if (low < high) {
      
        let pi = await partition(low, high,arr,heights,speed);
        await delay(speed)
        await quickSort(low, pi - 1,arr,heights,speed);
        await quickSort(pi + 1, high,arr,heights,speed);
    }
}
async function partition(low, high,arr,heights,speed) {
   let pivot = heights[high]; 
   let i = (low - 1); 
   await delay(speed)
   arr[high].classList.add("pivot")
    for (let j = low; j <= high - 1; j++) {
        await delay(speed);
       arr[j].classList.add("selected")
       await delay(speed)
               if (heights[j] < pivot) {
            i++;
            await delay(speed)
        arr[i].classList.add("left")  
            let temp = heights[i];
            heights[i] = heights[j];
           arr[i].style.height = heights[j] + "px";
           await delay(speed)
            heights[j] = temp;
            arr[j].style.height = temp + "px";
          
            await delay(speed)
            arr[i].classList.remove("left")
        }
        await delay(speed)
        arr[j].classList.remove("selected")
    }
    arr[high].classList.remove("pivot")
    let temp = heights[i + 1];
    heights[i + 1] = heights[high];
  arr[i+1].style.height= heights[high] + "px";
    heights[high] = temp;
    await delay(speed)
 
arr[high].style.height = temp + "px";
 
    await delay(speed);


    return (i + 1);
}

export default quick_sort