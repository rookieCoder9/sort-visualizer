import React, { useState } from 'react';
import Bar from './bar';



const Bararea = (props) => {
    let width=(700/props.arr.length)
   
  return <div> <hr /><div className='bararea'>{props.arr.map((ele,ind)=> {
      return <Bar height={ele} key={ind} width={width}/>
  })}
  
  </div><hr/></div>;
};


export default Bararea ;
