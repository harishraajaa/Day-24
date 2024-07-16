import React from 'react'
import Topbar from './Topbar'
function Home() {
  return <>
    <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
            <Topbar/>
            <section class="bg-white py-12 md:pt-20 md:pb-24 _about_19mo1_1" q:key="j7_2">
                <div class="container flex flex-col justify-around items-center md:flex-row md:gap-4 _container_19mo1_2">

                </div>
                <div class="md:w-1/2">
                    <h1 class="text-center md:text-left _reputedPlatform_19mo1_27">Reputed Edtech platform for <span class="text-primary">Vernacular Languages</span></h1>
                    
                    <p class="text-lg max-md:mt-6">GUVI is an IIT-M &amp; IIM-A incubated Ed-tech company that focuses on providing personalized learning solutions for its learners right from online learning, upskilling &amp; recruitment opportunities in world-class quality. And, bestow tech-skills with the comfort of your native language</p>
                    <p class="font-light w-fit mt-6 rounded p-3 _guviExtension_19mo1_14"><span class="text-primary font-semibold">GUVI</span> - <u>G</u>rab <u>U</u>r <u>V</u>ernacular <u>I</u>mprint</p>
                </div>  
            </section>
            </div>
    </div>
 


</>
}

export default Home
