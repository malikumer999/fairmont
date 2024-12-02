import React from 'react'

function Locationinfo() {
  return (
    <div className='text-center'>
    <div className='locationinformation py-5 '>
      <div className='locationinfo row container text-center  '>
        <div className=' col-md-4 col-12 px-2 mt-5 '>
            <img src="./Assests/images/sidebuilding.webp" className="locationinfoimg w-100 container" alt="" />
        </div>
        <div className='col-md-4 col-12 mt-5 '>
            <img src="./Assests/images/locationformimg.webp" className="locationinfoimg w-100 container px-3" alt="" />
        </div>
        <div className='col-lg-4 col-12  mt-5 '>
            <h1 className='locationinfohead fw-bolder'>Fairmont Residences Solara Tower</h1>
            <p className='locationinfopara'>Fairmont Residences Solara Tower in Downtown Dubai offers an unparalleled lifestyle of luxury and convenience. Residents will enjoy spacious, elegantly designed apartments with breathtaking views of the city skyline. The tower boasts a range of high-end amenities, including a state-of-the-art fitness center, an infinity pool, and exclusive dining options. With its prime location, residents have easy access to world-class shopping, dining, and entertainment venues. The 60/40 payment plan makes owning a piece of this luxurious lifestyle more attainable. Fairmont Residences Solara Tower embodies the perfect blend of sophistication and modern living.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Locationinfo
