import React from 'react'
import Topbar from './Topbar'
import Cardicon from './Cardicon'

function Fsd() {
  
    let fsddata=[
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
            title:"Best Full Stack Development Project Ideas in 2024",
            author:"By Isha Sharma"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
            title:"How Long Would It Take to be a Full Stack Developer?",
            author:"By Meghana D"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
            title:"10 Best DataBase Management System for Developers",
            author:"By Isha Sharma"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp",
            title:"7 Unique Web Development Project Ideas",
            author:"By Lukesh S"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
            title:"Top 10 Full Stack Developer Framework in 2024",
            author:"By Isha Sharma"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2021/05/react-945x495.jpg",
            title:"6 Essential Pre-Requisites for Learning ReactJs",
            author:"By Ram Kumar"
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
                <h1 className="h3 mb-0 text-gray-800">Full Stack Development</h1>
            </div>
            
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3">
                {
                    fsddata.map((e,i)=>{

                        return <Cardicon data={e} key={i} />

                    })
                }
            </div>

            </div>
            </div>
        
        </div>
  </>
}
export default Fsd
