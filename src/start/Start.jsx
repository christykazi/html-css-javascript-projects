import React from 'react'
import "./start.css"
import { BiBell } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import NOT1 from "../images/notification.png"
import INBOX from "../images/inbox.png"
import VIDEO from "../images/video.png"
import SEARCH from "../images/search.png"
import CBAE from "../images/cbae.jpeg"
import NEWS from "../images/news.png"
import FRIENDS from "../images/friends.png"
import GROUP from "../images/group.png"
import MKT from "../images/marketplace.png"
import WATCH from "../images/watch.png"
import UPLOAD from "../images/upload.png"
import MEM3 from "../images/member-3.png"
import MEM1 from "../images/member-1.png"
import MEM4 from "../images/member-4.png"
import MEM2 from "../images/member-2.png"
import PHOTO from "../images/photo.png"
import FEELING from "../images/feeling.png"
import LIVEV from "../images/live-video.png"
import SHARE  from "../images/share.png"
import PROFPIX  from "../images/profile-pic.png"
import CARTD  from "../images/caret-down.png"
import LIKEBL  from "../images/like-blue.png"
import COMMENTS  from "../images/comments.png"
import BABE from "../images/babe.jpeg"
import GIRLIEE from "../images/girliee.jpg"
import NEWGIRLL from "../images/newgirlll.jpg"
import NEWGIRL from "../images/newgirl.jpg"
import FEEDD  from "../images/feed-image-4.png"
import MEMBER1 from "../images/member-1.png"
import MEMBER2 from "../images/member-2.png"
import MEMBER3 from "../images/member-3.png"
import ADVERT from "../images/advertisement.png"
import SHORTCUT3 from "../images/shortcut-3.png"
import SHORTCUT1 from "../images/shortcut-1.png"
import SHORTCUT2 from "../images/shortcut-2.png"
import BABR from "../images/baeqr.jpg"
import HOME  from "../images/home.jpg"


const StartCompontent = () => {
  

  return (
    <>
    
       <nav id='navvv'> 
      <div className="nav-left">
        <a href="home.html">
        <p className="fi"> <BsFacebook className='ffaa' /></p>
      </a>
        <h1>FACEBOOK</h1>
       {/*  <!-- <a href="#"><TiSocialSkypeOutline/></a> -->
        <!-- <h3><SlSocialStumbleupon/></h3> --> */}
        <ul className='ull'>
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
        <div className="nav-user-icon online" >
          <img src={CBAE} alt="" />
        
        </div>
      </div>

    </nav>

    <div className="containerr">
    {/*   <!-- left sidebar --> */}
      <div className="left-sidebarr">
        <div className="lt-links">
          <a href="#" className='saa'><img src={NEWS} /> Lastest News</a>
          <a href="#" className='saa'><img src={FRIENDS} /> Friends</a>
          <a href="#" className='saa'><img src={GROUP} /> Group</a>
          <a href="#" className='saa'><img src={MKT} /> marketplace</a>
          <a href="#" className='saa'><img src={WATCH} /> Watch</a>
          <a href="#" className='saa'>See More</a>
          
        </div>
        <div className="shortcut-links">
          <p>Your Shortcuts</p>
          <a href="#" className='saa'
            ><img src={SHORTCUT1} /> Web Developers 
            </a>
          <a href="#" className='saa'
            ><img src={SHORTCUT2} />Web Design
            </a>
          <a href="#" className='saa'
            >
            <img src={SHORTCUT3} /> Full-Stack Web Developer 
            </a>
          <a href="#" className='saa'
            ><img src={HOME} /> Website Experts </a>
        </div>
      </div>
    {/*   <!-- main content --> */}
      <div className="main-content">
        <div className="story-gallery">
          <div className="story story1">
            <img src={UPLOAD} />
            <p className='ncc'>Post Story</p>
          </div>
          <div className="story story2">
            <img src={MEM3} />
            <p className='ncc'>Uche princess</p>
          </div>
          <div className="story story3">
            <img src={MEM1}/>
            <p className='ncc'>Agbai Christy</p>
          </div>
          <div className="story story4">
            <img src={MEM2} />
            <p className='ncc'> Felis keth</p>
          </div>
          <div className="story story5">
            <img src={MEM4} />
            <p className='ncc'>Peter Dan</p>
          </div>
        </div>
        <div className="write-post-container ccp">
          <div className="user-profile llft ccp">
            <img src={CBAE} />
            <div className='ccp'>
              <p className='ccp'>Agbai Christiana</p>
              <small className='ccp'>Public</small>
            </div>
          </div>
          <div className="post-input-container">
            <textarea className='lgft' rows="3" placeholder="What's on your Mind, Christiana?"></textarea>
            <div className="add-post-links">
              <a href="#" className='saa'><img src={LIVEV} />Live Video</a>
              <a href="#" className='saa'><img src={PHOTO} />Photo/Video</a>
              <a href="#" className='saa'><img src={FEELING} />Feeling/Activity</a>

            </div>
            
          </div>
        </div>

        <div className="post-container">
          <div className="post-row ccp">
 <div className="user-profile ">
            <img src={CBAE} />
            <div>
              <p className='ccp'>Agbai Christiana</p>
            <span className='ccp'>Sept 15 2023, 02:38 pm</span>
            </div>
          </div>

          </div>
         
        </div>

        <p className="post-text">Like and share this video with friends, tag <span>@Christiana   Project</span>facebook page on your post. Ask your doubts in the comments section <a href="#"className='saa' >#Christiana  Project</a> <a href="#" className='saa'>Channels</a></p>
        <img src={CBAE} className="post-img"/>



        <div className="post-row ">
          <div className="activity-icons">
<div ><img src={LIKEBL}
/>320</div>
<div><img src={COMMENTS} />55</div>
<div><img src={SHARE} />200</div>
          </div>
          <div className="post-profile-icon">
<img src={PROFPIX} /> <img src={CARTD} />

          </div>

        </div>

        <div className="post-container ccp">
          <div className="post-row ccp">
 <div className="user-profile ccp">
            <img src={CBAE}
            />
            <div>
              <p className='ccp'>Agbai Christiana</p>
            <span className='ccp'>July 19 2023, 10:15 am</span>
            </div>
          </div>

          </div>
         
        </div>

        <p className="post-text">Subscribe <span>@Christiana   Project </span>YouTube Channel to watch more videos on website development and UI designs. <a href="#" className='saa'>#Christiana  Project</a> <a href="#" className='saa'>Channels</a></p>
        <img src={GIRLIEE} className="post-img"/>



        <div className="post-row ">
          <div className="activity-icons ">
<div ><img src={LIKEBL}
/>120</div>
<div ><img src={COMMENTS} />45</div>
<div><img src={SHARE} />200</div>
          </div>
          <div className="post-profile-icon">
<img src={PROFPIX} /> <img src={CARTD} />

          </div>

        </div>
        <div className="post-container ">
          <div className="post-row ccp">
 <div className="user-profile ">
            <img src={CBAE} />
            <div>
              <p className='ccp'>Agbai Christiana</p>
            <span className='ccp'>May 05 2023, 01:15 pm</span>
            </div>
          </div>

          </div>
         
        </div>

        <p className="post-text">Subscribe <span>@Christiana  Project </span>YouTube Channel to watch more videos on website development and UI designs. <a href="#" className='saa'>#Christiana  Project</a> <a href="#" className='saa'>Channels</a></p>
        <img src={NEWGIRLL} className="post-img"/>



        <div className="post-row">
          <div className="activity-icons ">
<div ><img src={LIKEBL}
/>120</div>
<div ><img src={COMMENTS} />45</div>
<div><img src={SHARE} />200</div>
          </div>
          <div className="post-profile-icon">
<img src={PROFPIX} /> <img src={CARTD} />

          </div>

        </div>
        <div className="post-container">
          <div className="post-row ccp">
 <div className="user-profile ">
            <img src={CBAE}/>
            <div>
              <p className='ccp'>Agbai Christiana</p>
            <span className='ccp'>April 08 2023, 09:48 am</span>
            </div>
          </div>

          </div>
         
        </div>

        <p className="post-text">Subscribe <span>@Christiana   Project </span>YouTube Channel to watch more videos on website development and UI designs. <a href="#" className='saa'>#Christiana  Project</a> <a href="#" className='saa'>Channels</a></p>
        <img src={BABE} className="post-img"/>



        <div className="post-row ">
          <div className="activity-icons">
<div><img src={LIKEBL}
/>120</div>
<div ><img src={COMMENTS} />45</div>
<div><img src={SHARE} />200</div>
          </div>
          <div className="post-profile-icon">
<img src={PROFPIX} /> <img src={CARTD} />

          </div>

        </div>
        <div className="post-container ccp">
          <div className="post-row ccp">
 <div className="user-profile ccp">
            <img src={CBAE} />
            <div className='ccp'>
              <p className='ccp'>Agbai Christiana</p>
            <span className='ccp'>Feb 28 2023, 02:15 pm</span>
            </div>
          </div>

          </div>
         
        </div>

        <p className="post-text">Subscribe <span>@Christiana   Project </span>YouTube Channel to watch more videos on website development and UI designs. <a href="#" className='saa'>#Christiana  Project</a> <a href="#" className='saa'>Channels</a></p>
        <img src={NEWGIRL} className="post-img"/>



        <div className="post-row ">
          <div className="activity-icons ">
<div><img src={LIKEBL} />120</div>
<div><img src={COMMENTS} />45</div>
<div ><img src={SHARE} />200</div>
          </div>
          <div className="post-profile-icon">
<img src={PROFPIX} /> <img src={CARTD} />

          </div>

        </div>
        <div className="post-container ccp">
          <div className="post-row ccp">
 <div className="user-profile ccp">
            <img src={CBAE} />
            <div className='ccp'>
              <p className='ccp'>Agbai Christiana</p>
            <span className='ccp'>Jan 01 2023, 20:15 pm</span>
            </div>
          </div>

          </div>
         
        </div>

        <p className="post-text">Subscribe <span>Christiana  Project </span>YouTube Channel to watch more videos on website development and UI designs. <a href="#" className='saa'>#Christiana  Project</a> <a href="#" className='saa'>Channels</a></p>
        <img src={FEEDD} className="post-img"/>



        <div className="post-row ">
          <div className="activity-icons">
<div><img src={LIKEBL} />120</div>
<div><img src={COMMENTS} />45</div>
<div><img src={SHARE} />200</div>
          </div>
          <div className="post-profile-icon">
<img src={PROFPIX} /> <img src={CARTD} />

          </div>

        </div>

        
<button type="button" className="load-more-btn">Load More</button>
      </div>

    {/*   right side */}
      <div className="right-sidebar">

<div className="sidebar-title">
  <h4>Events</h4>
  <a href="#" className='ssaa'>See All</a>
</div>
<div className="event">
  <div className="left-event ccp">
    <h3 className='ccp'>14<sup className='ccp'>th</sup></h3>
    <span>Sept</span>
    <div>Dec</div>
    
  </div>
  <div className="right-event">
    <h4>frontend Developer</h4>
    <p><BiBell className='beln ccp' />Christiana Tech</p>
    <a href="#" className='ssaa'>More info</a>
  </div>
</div>
<div className="event">
  <div className="left-event ccp">
    <h3 className='ccp'>22<sup className='ccp'>th</sup> </h3>
    <div>June</div>
    <span>June</span>
    
  </div>
  <div className="right-event">
    <h4>Backend Developer</h4> 
    <p><BiBell className='beln ccp' /> Christiana Tech</p>
    <a href="#" className='ssaa'>More info</a>
  </div>
</div>
<div className="sidebar-title">
  <h4>Avertisement</h4>
  <a href="#" className='ssaa'>Close</a>
</div>
<img src={ADVERT} className="sidebar-ads"/>
<div className="sidebar-title">
  <h4>conversation</h4>
  <a href="#" className='ssaa'>Hide Chat</a>
</div>
<div className="online-list">
<div className="online">
  <img src={MEMBER1} alt=""/>
</div>
<p className='ccp'>Agbai Christiana</p>
</div>

<div className="online-list">
<div className="online">
  <img src={MEMBER2} alt=""/>
</div>
<p className='ccp'>Jackson Mina</p>
</div>

<div className="online-list">
<div className="online">
  <img src={MEMBER3} alt=""/>
</div>
<p className='ccp'>Samona Mina</p>
</div>
</div>
      </div>
      <div className="footer">
      <p className="coy">&copy; Christiana project - 2023.</p>
    </div>
    </>
  )
}

export default StartCompontent