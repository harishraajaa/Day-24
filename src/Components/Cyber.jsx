import React from 'react'
import Topbar from './Topbar'
import Cardicon from './Cardicon'

function Cyber() {
    let cyberdata=[
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
            title:"What is Hacking? Types of Hacking and More",
            author:"By Meghana D"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
            title:"8 Different Types of Cybersecurity and Threats Involved",
            author:"By Tushar Vinosha"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
            title:"What is Cybersecurity? Importance and Uses",
            author:"By Isha Sharma"
        }
    ]

  return <>
    <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
            <Topbar/>
            <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Cyber Security</h1>
            </div>
            
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3">
                {
                    cyberdata.map((e,i)=>{

                        return <Cardicon data={e} key={i} />

                    })
                }
            </div>

            </div>
            </div>
        
        </div>
  </>
}

export default Cyber
