const delay=(time)=> {return  new Promise((resolve)=> setTimeout(resolve,time))}
var heights=[]
async function  merge(speed){
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

await mergeSort(0,size-1,speed,arr)
heights=[]
for (let i=0;i<inputs.length;i++){
    inputs[i].disabled=false;
}
for (let i =0;i<header.length;i++){
    header[i].disabled=false
}

}



async function mergeSort(l, r,speed,arr) {
    if (l < r) {
        let mid = Math.floor(l + (r - l) / 2);

        await mergeSort(l, mid,speed,arr);
    
        await mergeSort(mid + 1, r,speed,arr);
    
        await _merge(l, mid, r,speed,arr);
        
    }
}
async function _merge(l, mid, r,speed,arr) {
    await delay(speed)
    for (let a = l; a <= r; a++) {
        arr[a].classList.add("selected")
      
    }
    await delay(speed);
    let s1 = mid - l + 1;
    let s2 = r - (mid);
  let  left = [], right = [];
    for (let a = 0; a < (s1); a++) {
        left[a] = heights[l+a]
      
    }



    for (let a = 0; a < s2; a++) {
        right[a] =heights[mid+1+a] 
      


    }



    let i = 0, j = 0, k = l;
    while (i < s1 && j < s2) {

        await delay(speed);
        if (left[i] > right[j]) {
            heights[k] = right[j];
            arr[k].style.height = right[j] + "px";
            

            j++;
        }
        else {
            heights[k] = left[i];
          arr[k].style.height = left[i]+ "px";
      
            i++;
        }
        await delay(speed)
       arr[k].classList.remove("selected") 
        k++;
    }
    while (i < s1) {
        await delay(speed);

        heights[k] = left[i];
       arr[k].style.height = left[i] + "px";
        await delay(speed);
      arr[k].classList.remove("selected") 
      await delay(speed);
        k++; i++;
    }
    while (j < s2) {
        await delay(speed);

        heights[k] = right[j];
    arr[k].style.height = right[j] + "px";
        await delay(speed)
       arr[k].classList.remove("selected")
       await delay(speed);
        k++; j++;
    }
    
}

export default merge