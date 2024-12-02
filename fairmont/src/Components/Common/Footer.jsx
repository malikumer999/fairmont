import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer py-5'>
      <div className='row container'>
        <div className='col-md-4 '> 
        <img src="./Assests/images/fairmontlogo.webp" alt="" />
        </div>
      
      <div className='col-md-4 '>
        <h3 className='text-center'>Contact</h3>
      <div className="d-flex flex-column justify-content-center align-items-center ">
                <div className="row ">

 <div className="col-md-6 col-12 mb-3 ">         
<input type="text" className="locationformfields form-control " placeholder="Name"  />
</div>
<div className="col-md-6 col-12 mb-3"> 
<input type="emial" className="locationformfields form-control " placeholder="Email" />
</div>
<div className=" col-12 mb-3"> 
<input type="number" className="locationformfields form-control  " placeholder="Phone No" />
</div>
<div className=" col-12 mb-3"> 
<input type="text" className="locationformfields form-control  py-5" placeholder="Description" />
</div>
</div>
</div>
<div class="btn btn-dark btn-lg text-white mb-4  ">Submit</div>
</div>
    

<div className='col-md-4'>

       <div className='d-flex justify-content-around flex-wrap fw-bold'>
          <Link class="nav-link mx-2 " aria-current="page" href="/">Home</Link>
        
       
          <Link class="nav-link " href="/">Location</Link>
     
        
          <Link class="nav-link" href="/">Amenities</Link>
      
       
          <Link class="nav-link" href="/">Payment Plan</Link>
       
        
          <Link class="nav-link" href="/">Properties</Link>
      
      
          <Link class="nav-link mx-2" href="/">Brochure</Link>
       
          </div>
    
</div>
    <div className='endline text-center  mt-5'>
    <p>FairmontResidencesSolaraTower.com is not the official website for the Fairmont Residences Solara Tower project. This site is intended for informational purposes only and is not managed by the official developers of the Fairmont Residences Solara Tower project</p>
    <p className='fw-bolder'>
    © 2024 fairmontresidencessolaratower.com
    </p>
    </div>
    </div>

    
    </div>
  )
}

export default Footer
