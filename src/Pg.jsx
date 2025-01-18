import React, { useState } from 'react';
import './Pg.css';
import { Row,Col } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {uc,sc,lc,num} from 'C:/Users/dudim/PasswordG/src/Data/letters';

export default function Pg() {


    let [disp,setDis]=useState('');
    let char='';
    let [ucount,setCount]=useState(false);
    let [scount,setScount]=useState(false);
    let [ncount,setNcount]=useState(false);
    let [plength,setPass]=useState(10);
   let [lcount,setLcount]=useState(false);
let update=(event)=>{
setPass(Number(event.target.value))
}
if(ucount || scount || ncount || lcount)
{
  if(ucount)
    {
       char+=uc;
    }
    if(scount)
    {
      char+=sc;
    }
 if(ncount)
 {
  char+=num;
 }
if(lcount)
{
  char+=lc;
}
  }

 let news ='';
 for(let i=0;i<plength;i++)
    {
news+=char.charAt(Math.floor(Math.random()*char.length))
    }
    let ncheck=(nc)=>
    {
if(nc)
{
setNcount(false)
}
else{
  setNcount(true)
}
    }
    let lcheck=(c)=>{
      if(c)
      {
        setLcount(false);
      }
      else{
        setLcount(true);
      }
     }
 let check=(c)=>{
  if(c)
  {
    setCount(false);
  }
  else{
    setCount(true);
  }
 }
 let scheck=(c)=>{
  if(c)
  {
    setScount(false);
  }
  else{
    setScount(true);
  }
 }
let getdata=()=>{
  
    setDis(news);
    if(news=='')
    {
      toast.error("At least one character set must be selected")
    }
}
let copyPass=()=>{
    navigator.clipboard.writeText(disp)
    
    if(disp==''){toast.error("Generate a password before copying!")}
    else{
      toast.success("Password copied to clipboard!")
    }

}

  return (
    <div  className='head'>
      <div className='box'>
<div className='boxin'>
<h3>Password Generator</h3>
<div style={{display:'flex',gap:"20px",marginTop:"10px"}}>
<input style={{width:"270px",height:"45px",gap:"3px",  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)" } } type='text'   readOnly value={disp}>
</input><button className='btn btn-primary' style={{width:"80px" ,height:"45px",fontSize:"20px"}} onClick={copyPass}>copy</button>
</div>
<Row className='mt-4'>
    <Col>
    <label>
       <h5>Password Length</h5> </label></Col>
        <Col>
        <input type='number' style={{width:"80px"}}    onChange={update}max={20} min={10} value={plength} ></input></Col>
</Row>
<Row className='mt-4'>
    <Col>
    <label>
       <h5>Enter UpperCase</h5> </label></Col>
        <Col>
        <input type='checkbox'  checked={ucount}  onChange={()=>check(ucount)}></input></Col>
</Row>
<Row className='mt-4'>
    <Col>
    <label>
       <h5>Enter LowerCase</h5> </label></Col>
        <Col>
        <input type='checkbox'  checked={lcount}   onChange={()=>lcheck(lcount)}></input></Col>
</Row>
<Row className='mt-4'>
    <Col>
    <label>
       <h5>Enter SpecialCase</h5> </label></Col>
        <Col>
        <input type='checkbox' checked={scount}   onChange={()=>scheck(scount)}></input></Col>
</Row>
<Row className='mt-4'>
    <Col>
    <label>
       <h5>Enter Number</h5> </label></Col>
        <Col>
        <input type='checkbox' checked={ncount}  onChange={()=>ncheck(ncount)} style={{width:"20px"}}></input></Col>
</Row>
<Row>
  <Col>
  <button className='btn btn-success mt-3' style={{width:"300px"}} onClick={getdata}  disabled={!ucount && !lcount && !scount && !ncount}>
    Genertor</button></Col>
</Row>
</div>
      </div>
      <ToastContainer />
    </div>
  )
}
