import React from 'react'

export default function About(props) {
  return (
    <>
    {/* style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} */}
 <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode=='dark'?'white':'black'}}>
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  </div>
  <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Find" aria-label="Search" style={{width:'11vw'}}/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

    </>
  )
}
