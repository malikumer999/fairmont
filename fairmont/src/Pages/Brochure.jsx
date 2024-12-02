import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Brouchermain from '../Components/Broucher/Brouchermain'
import Broucherform from '../Components/Broucher/Broucherform'
import Detailsbroucher from '../Components/Broucher/Detailsbroucher'
import Footer from '../Components/Common/Footer'

function Brochure() {
  return (
    <div>
      <Navbar/>
      <Brouchermain/>
   <Broucherform/>
   <Detailsbroucher/>
      <Footer/>
    </div>
  )
}

export default Brochure
