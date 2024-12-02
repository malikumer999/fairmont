import React from 'react'

function Payment() {
  return (
    <div id='payment'>
       <div className='Discoverfairmont  container py-5'>
    <h1 className='fw-bolder text-center'>Solara Tower Payment Plan</h1>
    <p className='Discoverfairmontpara '>The Solara Tower Payment Plan requires a 5% initial payment upon reservation, 40% on handover, and structured instalments over 24 months. This approach ensures financial flexibility and convenience for end users and investors.
    </p>
     <div class="row g-3 mt-5 ">
                <div class="col-md  col-12 d-flex">
                    
                    <div class=" bg-light p-4 flex-fill text-center  ">
                    <div className='fw-bolder fs-4' >5%</div>
                     <div className='fs-6'>Downpayment</div>
                    </div>
                </div>
                <div class="col-md  col-12 d-flex">
                    
                    <div class=" bg-light p-4 flex-fill text-center  ">
                    <div className='fw-bolder fs-4' >55%</div>
                     <div className='fs-6'>During Construction</div>
                    </div>
                </div>
                <div class="col-md  col-12 d-flex">
                    
                    <div class=" bg-light p-4 flex-fill text-center  ">
                    <div className='fw-bolder fs-4' >40%</div>
                     <div className='fs-6'>On Handover.</div>
                    </div>
                </div>
            
            
            </div>
            
            <div className='Discoverfairmont  container py-5 text-center'>
    <h1 className='fw-bolder text-center'>Payment Plan Breakdown</h1>
    <p className='Discoverfairmontpara '>AED 100,000 Initial Payment on Booking
    </p>
    <p className='Discoverfairmontpara '>20% – First Installment
    </p>
    <p className='Discoverfairmontpara '>10% Installments paid every 6 months over 2 Years (4 in total)
    </p>
    <p className='Discoverfairmontpara '>40% On Project completion
    </p>
            </div>

</div>

    </div>
  )
}

export default Payment
