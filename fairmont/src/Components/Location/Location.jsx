import React from 'react'

function Location() {
  return (
    <div id='location'>
            <div className="location px-5 ">
        <div className="row container ">
        <div class="col-md-6 d-flex justify-content-center flex-column mt-5">
                        <img class="w-100 rounded-5" src="./Assests/images/Mapfairmont.webp" alt=""/>
                    </div>
          <div className="col-md-6 mt-5 mb-5">
            <div class="bg-white border p-3 border-2 border-black rounded-5">
                            <div class="fs-5 fw-bolder">
                                Downtown Dubai Location
                            </div>
                            <div class="py-2">
                                Located in the vibrant heart of Downtown Dubai, Fairmont Residences Solara Tower offers
                                unparalleled access to some of the city’s most iconic landmarks. Just steps away,
                                residents enjoy proximity to world-renowned attractions such as the towering Burj
                                Khalifa, the expansive Dubai Mall, and the cultural hub of Dubai Opera. This prime
                                location not only provides the convenience of urban living but also boasts seamless
                                access to the picturesque Dubai Canal promenade. Here, residents can experience a
                                harmonious blend of urban excitement amidst a backdrop of tranquil waterfront views,
                                creating an unmatched lifestyle that epitomizes luxury in Downtown Dubai.
                            </div>
                            <div class="fs-5 fw-bolder">
                                Nearby Attractions:
                            </div>
                            <ul>
                                <li>Burj Khalifa</li>
                                <li>Dubai Mall</li>
                                <li>Safa Park</li>
                            </ul>

                        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
