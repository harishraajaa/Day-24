import React from 'react'
import Topbar from './Topbar'
import Cardicon from './Cardicon'

function Aiml() {
    let aidata=[
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-2.png",
            title:"The Influence of ChatBots on Customer Service",
            author:"By Meghana D"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2024/04/feature_image-1-4.webp",
            title:"Top 7 Engineering Projects using ChatGPT",
            author:"By Lukesh S"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2024/05/feature_image-1-2.webp",
            title:"Best Pratices for Prompt Engineering",
            author:"By Jaishree Tomar"
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
                <h1 className="h3 mb-0 text-gray-800">Artificial Intelligence & Machine Learning</h1>
            </div>
            
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3">
                {
                    aidata.map((e,i)=>{

                        return <Cardicon data={e} key={i} />

                    })
                }
            </div>

            </div>
            </div>
        
        </div>
  </>
}

export default Aiml
