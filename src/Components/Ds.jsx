import React from 'react'
import Topbar from './Topbar'
import Cardicon from './Cardicon'

function Ds() {
    let dsdata=[
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
            title:"Top High Paying Non-Coding Jobs in Data Science",
            author:"By Isha Sharma"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
            title:"Can a Commerce Student do Data Science?",
            author:"By Saakshi"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
            title:"Roles and Responsibilities of Data Scientist",
            author:"By Jaishree Tomar"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Everything-about-Data-Scientist-Salary-in-India-2023-2048x1072.png",
            title:"Every thing about Data Scientist Salary in India",
            author:"By Srinithi Sankar"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
            title:"Top Product-Based Companies for Data Scientist in 2024",
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
                <h1 className="h3 mb-0 text-gray-800">Data Science</h1>
            </div>
            
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3">
                {
                    dsdata.map((e,i)=>{

                        return <Cardicon data={e} key={i} />

                    })
                }
            </div>

            </div>
            </div>
        
        </div>
  </>
}

export default Ds
