import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return <>
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<Link to='/home'className="sidebar-brand d-flex align-items-center justify-content-center">
    <div className="sidebar-brand-text mx-3">
    <img loading="lazy" className="header_image" id="header_image" src="https://www.guvi.in/blog/wp-content/themes/guvi-blog\assets\images\guvi-logo.svg" alt="header_logo"/>
    </div>
</Link>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <Link className="nav-link" to='/home'>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Home</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Courses
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <Link className="nav-link collapsed" to='/fsd' data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-cog"></i>
        <span>Full Stack Development</span>
    </Link>
</li>
{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <Link className="nav-link collapsed" to='/ai-ml' data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>AI & ML</span>
    </Link>
</li>

<li className="nav-item">
    <Link className="nav-link collapsed" to='/ds' data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Data Science</span>
    </Link>
</li>

<li className="nav-item">
    <Link className="nav-link collapsed" to='/cyber' data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Cyber Security</span>
    </Link>
</li>
{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>
</ul>
</>
}

export default Sidebar
