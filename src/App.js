import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import  Header from './components/header';
import Bararea from './components/bararea';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer'
function fillarray(sz){
  let arr=[];
  for (let i=0;i<sz;i++){
arr.push(Math.floor(Math.random() * (198 - 10 + 1)) + 10)
  }
  return arr;
}
function App() {
  const [arr,setArr]=  useState(fillarray(100));
 
  
  const randomarr=(size)=> {
   
    setArr(fillarray(size))
  }
 
  return (
    <div >
<Header method={[randomarr]} />
<Bararea arr={arr} />
<Footer/>
</div>
  );
}

export default App;
