import React from 'react'

function Broucherform() {
  return (
    <div>

       

        <div className=' bg-body-tertiary py-5 d-flex justify-content-center'>

        <div className='row container  '>
            <div className='col-md-6 text-center d-flex justify-content-center align-content-center'>
    
    <div className=' mt-5  '>
        <h1 className=' mb-5'>DOWNLOAD BROCHURE & FLOOR PLAN</h1>
        <input type="text" className='form-control mb-4  p-3' placeholder='Name' name="" id="" />
        <input type="email" className='form-control mb-4 p-3' placeholder='Email' name="" id="" />
    <div className=''>
    <div class="d-flex align-items-center">
        
        <div class="me-2" >
            <select class="form-select py-3" aria-label="Default select example">
                <option disabled selected value="">Choose Country Code</option>
                <option value="AF">Afghanistan (‫افغانستان‬‎)</option>
                <option value="AL">Albania (Shqipëri)</option>
                <option value="DZ">Algeria (‫الجزائر‬‎)</option>
            
            </select>
        </div>
    
       
        <div className='flex3'>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Number" />
                <label for="floatingInputGroup1">Number</label>
            </div>
        </div>
    </div>
    
                                        </div>
                                        <div className='d-flex justify-content-lg-start'>
                                        <div class="btn btn-dark btn-lg text-white mb-4 mt-4 ">Download</div>
                                        </div>
    </div>
    </div>
    

    <div className='col-md-6 mt-5'><img className='w-100 rounded-5' src="./Assests/images/sidebuilding.webp" alt="" /></div>
    </div>
    </div>
    </div>
  )
}

export default Broucherform
