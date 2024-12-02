import React from 'react'

function Locationform() {
  return (
    <div>
      <div className="locationform px-3 py-5">
    <h1 className="text-center mb-5 fw-bolder">Register Your Interest </h1>
    <div className="row ">
        <div className="col-md-6 tex-center px-5">
<img className="w-100 rounded-5 " src="./Assests/images/locationformimg.webp" alt="" />
        </div>
        <div className="col-md-6 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="row">

 <div className="col-md-6 col-12 mb-3">         
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
<div class="btn btn-dark btn-lg text-white mb-4 mt-4 ">Submit</div>
</div>
    </div>
</div>
    </div>
  )
}

export default Locationform
