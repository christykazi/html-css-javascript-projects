import React from 'react'
import "./start.css"
import NOT1 from "../images/notification.png"
import INBOX from "../images/inbox.png"
import VIDEO from "../images/video.png"
import SEARCH from "../images/search.png"
import CBAE from "../images/cbae.jpeg"
import VIDEO from "../images/video.png"
import VIDEO from "../images/video.png"
import VIDEO from "../images/video.png"

const StartCompontent = () => {
  return (
    <>
          <div>

      <div className="nav-left">
        <a href="home.html">
        <p className="fi"> <box-icon type='logo' name='facebook-circle'></box-icon></p>
      </a>
        <h1>FACEBOOK</h1>
       {/*  <!-- <a href="#"><TiSocialSkypeOutline/></a> -->
        <!-- <h3><SlSocialStumbleupon/></h3> --> */}
        <ul>
          <li><img src={NOT1} alt="i" /></li>
          <li><img src={INBOX} alt="ii" /></li>
          <li><img src={VIDEO} alt="iii" /></li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="search-box">
          <img src={SEARCH} />
          <input type="text" placeholder="search" />
        </div>
        <div className="nav-user-icon online" onClick="settingMenuToggle()">
          <img src={CBAE} alt="" />
        </div>
      </div>
    --  settings-menu -- 
   
    </div>
    </>
  )
}

export default StartCompontent