// import React from 'react'
import React, { useState } from 'react';


export default function Text(props) {
  const [text,setText]=useState("");
  const [word,setWord]=useState("");
  const [time,setTime]=useState("");
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    // console.log("Upper case was clicked");
    
  }

  const handleOnChange=(event)=>{
    // setText=
    setText(event.target.value);
  }

  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleonclear=()=>{
      setText("");
  }
  const handleOnWrite=(event)=>{
    // setText=
    setWord(event.target.value);
  }
  
  const handkeHilite=()=>{
    let n=text.split(" ").length;
    const myword = text.split(" ");
    let cnt=0;
    for(let i=0;i<n;i++){
    if(myword[i]===word&&myword!=""){
      // text.backgroundColor='yellow';
      // text.split(" ")[i].color='#ff0000';
      text.split(" ").color='red';

      // myword[i].color='#ff0000';
      console.log(text.split(" ")[i]);
     cnt++;
    }
  }
  setTime(cnt);
}
  return (
    <>
    
    {/* <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div> */}
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>Enter your text</h1></label>
    <textarea className="form-control"  value={text}  placeholder="Enter your text here"    style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}
 onChange={handleOnChange} id="mybox"  rows="8"></textarea>
  </div>
  <div className="btn">
  <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
  <button type="button" className="btn btn-primary  mx-3 my-3" onClick={handleLoClick}>Convert to LowerCase</button>
  <button type="button" className="btn btn-primary  mx-3 my-3" onClick={handleonclear}>Clear texts</button>
  <form class="d-flex" role="search">np
        <input class="form-control me-2" type="search" placeholder="Find" aria-label="Search" onChange={handleOnWrite} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black' ,width:'71px' ,height:'38px',margin:'1vh'}}/>
        {/* <button class="btn btn-outline-success"  onClick={handkeHilite}>Search</button> */}
        <button type="button" className="btn btn-primary  mx-3 my-2" onClick={handkeHilite} style={{width:'71px' ,height:'38px'}}>Find</button>
        <div className="sumit" style={{textAlign:'center'}}>
       <p style={{backgroundColor:props.mode==='dark'?'#2e2727':'white',color:props.mode==='dark'?'white':'#2e2727' }}>The count of {word} is :    {time}</p> 
       </div>
      </form>
  </div>
  <div className="preview my-3">
    <h2>Your Text Sumarry</h2>
    
    <p>{text.split(" ").length} Words and {text.length} Character</p>
    
      <h2>Preview</h2>
      <p>
        {text}
    </p>
  </div>
  </>
  )
}
