import React from 'react';
import './header.css'
import bubble from '../bubble.js'
import merge from '../merge.js'
import quick_sort from '../quicksort.js'
import insertion from '../insertion.js'
import {theme1,theme2,theme3} from "./themes"
import {Navbar,Nav,Container} from 'react-bootstrap'
function getVal() {
    return document.getElementById("size-inp").value === "" ? 10 : parseInt(document.getElementById("size-inp").value)
}
let speed = 100
const Header = (props) => {
    const handlechange = (event) => {
        const val = event.target.value
        speed = parseInt(val / 100)
        if (val == "" || val == 0) { props.method[0](100); }
        else props.method[0](val);

    }

    return <div><Navbar className='flex-container head' expand="lg">
    <Container>
      <Navbar.Brand className='head-button'>Sort Visualizer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link ><button className='head-button' onClick={() => merge(speed)} >Merge Sort</button></Nav.Link>
        <Nav.Link ><button className='head-button' onClick={() => bubble(speed)} >Bubble Sort</button></Nav.Link>
          <Nav.Link ><button className='head-button' onClick={() => insertion(speed)} >Insertion Sort</button></Nav.Link>
          <Nav.Link ><button className='head-button' onClick={() => quick_sort(speed)} >Quick Sort</button></Nav.Link>
          <Nav.Link ><button className='head-button'onClick={() => props.method[0](getVal())}> Randomise </button></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
        
        <div className='options flex-container'>
          <div> <span>Size {" "} </span>
                <input type="text" placeholder='100' id="size-inp" maxLength={3} onChange={handlechange} />
                </div>   <div className='theme-box'>                 <span>Theme</span> 

              <button style={{background:"lightgrey"}}onClick={()=> theme1()}></button>
              <button  style={{background:"#35858B"}} onClick={()=> theme2()}></button> 
              <button  style={{backgroundColor:"#444444"}}onClick={()=>theme3()}></button></div>
     
                

        </div>

    </div>;
};

export default Header;
