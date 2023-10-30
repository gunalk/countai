import React from 'react'
import "./App.css"

import { FaHome } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi'
import { LuView } from 'react-icons/lu'
import { BiSolidReport } from 'react-icons/bi'
import { MdSystemUpdateAlt} from 'react-icons/md'
import {CiSettings} from 'react-icons/ci'
const App = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='countAi-logo'>
         COUNT <span>AI</span>
        </div>
        <div className='kniti-logo'>
          Knit i
        </div>
      </div>
   <div className='container'>  
     <div className="left-Container">
       <div className="boxes">
        <div className="box">
          <div className="logo"> <FaHome/></div>
          <div className="name">Home</div>
           </div>
         
           <div className="box">
          <div className="logo"> <BiEdit/></div>
          <div className="name">Edit program info</div>
           </div>


           <div className="box">
          <div className="logo"> <MdSystemUpdateAlt /></div>
          <div className="name">update doff info</div>
           </div>
         
           <div className="box">
          <div className="logo"> <LuView/></div>
          <div className="name">View program info</div>
           </div>

           <div className="box">
          <div className="logo"> <BiSolidReport/></div>
          <div className="name">Report</div>
           </div>

           <div className="box">
          <div className="logo"> <CiSettings/></div>
          <div className="name">Setting</div>
           </div>
       </div>

     </div>

     <div className="right-container">
      <div className="top-box">
        <div className="tp-box">
          <p>Machine Status</p>
          <p style={{color:"red",fontSize:"12px"}}>Maintenance</p>
        </div>
        <div className="tp-box">
          <p>doff Count</p>
          <p 
          style={{color:"white",fontSize:"12px"}}>0/123</p>
        </div>
        <div className="tp-box">
          <p>Alarm Reset</p>
        
        </div>
        <div className="tp-box">
          <p>Start New roll</p>
          
        </div>

        
      </div>
      <div className="middle-section">
          <div className="section">
            <div className="orange1"><p className='para'>Live camera</p></div>
          <div className="black"></div>
          </div>

        </div>

        <div className="top-box1">
        <div className="tp-box">
          <p>Roll number</p>
          <p style={{color:"white",fontSize:"12px"}}>2</p>
        </div>
        <div className="tp-box">
          <p>Fabric Type</p>
          <p 
          style={{color:"white",fontSize:"12px"}}>fd</p>
        </div>
        <div className="tp-box">
          <p>Defect Count</p>
        
        </div>
        <div className="tp-box">
          <p>Previous Defect</p>
          
        </div>

        
      </div>
     </div>
     </div>

    </div>
  )
}

export default App