import React from 'react'
import NOT1 from "/imagges/images/not"

const StartCompontent = () => {
  return (
          <div>
      <div className="nav-left">
        <a href="home.html">
        <p className="fi"> <box-icon type='logo' name='facebook-circle'></box-icon></p>
      </a>
        <h1>FACEBOOK</h1>
       {/*  <!-- <a href="#"><TiSocialSkypeOutline/></a> -->
        <!-- <h3><SlSocialStumbleupon/></h3> --> */}
        <ul>
          <li><img src={NOT1} alt="" /></li>
          <li><img src="images/inbox.png" alt="" /></li>
          <li><img src="images/video.png" alt="" /></li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="search-box">
          <img src="images/search.png" />
          <input type="text" placeholder="search" />
        </div>
        <div className="nav-user-icon online" onClick="settingMenuToggle()">
          <img src="images/cbae.jpeg" alt="" />
        </div>
      </div>
   {/*  --  settings-menu --  */}
   
      <div className="settings-menu">
        <div id="dark-btn" >
          <span>

          </span>
        </div>



        <div className="settings-menu-inner">   
        <div className="user-profile">
          <img src="images/cbbae.jpeg" />
          <div>
            <p>Agbai Christiana</p>
       <a href="profile.html">See your Profile</a>
          </div>
      </div>
      <hr/>
      <div className="user-profile">
        <img src="images/feedback.png" />
        <div>
          <p>Give Feedback </p>
     <a href="#">Help us to improve the new designs</a>
        </div> 
    </div>
    <hr/>
    <div className="settings-links">
      <img src="images/setting.png" className="settings-icon"/>
      <a href="#">Settings & Privacy <img src="images/arrow.png" width="10px" /> </a>
    </div>
    <div className="settings-links">
      <img src="images/help.png" className="settings-icon"/>
      <a href="#">Help & Support<img src="images/arrow.png" width="10px" /> </a>
    </div>
    <div className="settings-links">
      <img src="images/display.png" className="settings-icon"/>
      <a href="#">Display & Accessibility <img src="images/arrow.png" width="10px" /> </a>
    </div>
    <div className="settings-links">
      <img src="images/logout.png" className="settings-icon"/>
      <a href="#">Logout <img src="images/arrow.png" width="10px" /> </a>
    </div>
  
    </div>

    <div className="container">
    {/*   <!-- left sidebar --> */}
      <div className="left-sidebar">
        <div className="lt-links">
          <a href="#"><img src="images/news.png" /> Lastest News</a>
          <a href="#"><img src="images/friends.png" /> Friends</a>
          <a href="#"><img src="images/group.png" /> Group</a>
          <a href="#"><img src="images/marketplace.png" /> marketplace</a>
          <a href="#"><img src="images/watch.png" /> Watch</a>
          <a href="#">See More</a>
          
        </div>
        <div className="shortcut-links">
          <p>Your Shortcuts</p>
          <a href="#"
            ><img src="images/shortcut-1.png" /> Web Developers</a
          >
          <a href="#"
            ><img src="images/shortcut-2.png" />Web Design
            </a
          >
          <a href="#"
            ><img src="images/shortcut-3.png" /> Full-Stack Web Developer 
            </a
          >
          <a href="#"
            ><img src="images/home.jpg" /> Website Experts </a>
        </div>
      </div>
    {/*   <!-- main content --> */}
      <div className="main-content">
        <div className="story-gallery">
          <div className="story story1">
            <img src="images/upload.png" />
            <p>Post Story</p>
          </div>
          <div className="story story2">
            <img src="images/member-3.png" />
            <p>Uche princess</p>
          </div>
          <div className="story story3">
            <img src="images/member-1.png"/>
            <p>Onyeka Gift</p>
          </div>
          <div className="story story4">
            <img src="images/member-2.png" />
            <p> Felis keth</p>
          </div>
          <div className="story story5">
            <img src="images/member-4.png" />
            <p>Peter Dan</p>
          </div>
        </div>
        <div className="write-post-container">
          <div className="user-profile">
            <img src="images/cbbae.jpeg" />
            <div>
              <p>Agbai Christiana</p>
              <small>Public</small>
            </div>
          </div>
          <div className="post-input-container">
            <textarea rows="3" placeholder="What's on your Mind, Christiana?"></textarea>
            <div className="add-post-links">
              <a href="#"><img src="images/live-video.png" />Live Video</a>
              <a href="#"><img src="images/photo.png" />Photo/Video</a>
              <a href="#"><img src="images/feeling.png" />Feeling/Activity</a>

            </div>
            
          </div>
        </div>

        <div className="post-container">
          <div className="post-row">
 <div className="user-profile">
            <img src="images/cbbae.jpeg" />
            <div>
              <p>Agbai Christiana</p>
            <span>Sept 15 2023, 02:38 pm</span>
            </div>
          </div>

          </div>
         
        </div>

        <p className="post-text">Like and share this video with friends, tag <span>@Christiana   Project</span>facebook page on your post. Ask your doubts in the comments section <a href="#">#Christiana  Project</a> <a href="#">Channels</a></p>
        <img src="images/baeq.jpg" className="post-img"/>



        <div className="post-row">
          <div className="activity-icons">
<div><img src="images/like-blue.png"
/>320</div>
<div><img src="images/comments.png" />55</div>
<div><img src="images/share.png" />200</div>
          </div>
          <div className="post-profile-icon">
<img src="images/profile-pic.png" /> <img src="images/caret-down.png" />

          </div>

        </div>

        <div className="post-container">
          <div className="post-row">
 <div className="user-profile">
            <img src="images/cbbae.jpeg"
            />
            <div>
              <p>Agbai Christiana</p>
            <span>July 19 2023, 10:15 am</span>
            </div>
          </div>

          </div>
         
        </div>

        <p className="post-text">Subscribe <span>@Christiana   Project </span>YouTube Channel to watch more videos on website development and UI designs. <a href="#">#Christiana  Project</a> <a href="#">Channels</a></p>
        <img src="images/girliee.jpg" className="post-img"/>



        <div className="post-row">
          <div className="activity-icons">
<div><img src="images/like-blue.png"
/>120</div>
<div><img src="images/comments.png" />45</div>
<div><img src="images/share.png" />200</div>
          </div>
          <div className="post-profile-icon">
<img src="images/profile-pic.png" /> <img src="images/caret-down.png" />

          </div>

        </div>
        <div className="post-container">
          <div className="post-row">
 <div className="user-profile">
            <img src="images/cbbae.jpeg" />
            <div>
              <p>Agbai Christiana</p>
            <span>May 05 2023, 01:15 pm</span>
            </div>
          </div>

          </div>
         
        </div>

        <p className="post-text">Subscribe <span>@Christiana  Project </span>YouTube Channel to watch more videos on website development and UI designs. <a href="#">#Christiana  Project</a> <a href="#">Channels</a></p>
        <img src="images/newgirlll.jpg" className="post-img"/>



        <div className="post-row">
          <div className="activity-icons">
<div><img src="images/like-blue.png"
/>120</div>
<div><img src="images/comments.png" />45</div>
<div><img src="images/share.png" />200</div>
          </div>
          <div className="post-profile-icon">
<img src="images/profile-pic.png" /> <img src="images/caret-down.png" />

          </div>

        </div>
        <div className="post-container">
          <div className="post-row">
 <div className="user-profile">
            <img src="images/cbbae.jpeg" />
            <div>
              <p>Agbai Christiana</p>
            <span>April 08 2023, 09:48 am</span>
            </div>
          </div>

          </div>
         
        </div>

        <p className="post-text">Subscribe <span>@Christiana   Project </span>YouTube Channel to watch more videos on website development and UI designs. <a href="#">#Christiana  Project</a> <a href="#">Channels</a></p>
        <img src="images/babe.jpeg" className="post-img"/>



        <div className="post-row">
          <div className="activity-icons">
<div><img src="images/like-blue.png"
/>120</div>
<div><img src="images/comments.png" />45</div>
<div><img src="images/share.png" />200</div>
          </div>
          <div className="post-profile-icon">
<img src="images/profile-pic.png" /> <img src="images/caret-down.png" />

          </div>

        </div>
        <div className="post-container">
          <div className="post-row">
 <div className="user-profile">
            <img src="images/cbbae.jpeg" />
            <div>
              <p>Agbai Christiana</p>
            <span>Feb 28 2023, 02:15 pm</span>
            </div>
          </div>

          </div>
         
        </div>

        <p className="post-text">Subscribe <span>@Christiana   Project </span>YouTube Channel to watch more videos on website development and UI designs. <a href="#">#Christiana  Project</a> <a href="#">Channels</a></p>
        <img src="images/newgirl.jpg" className="post-img"/>



        <div className="post-row">
          <div className="activity-icons">
<div><img src="images/like-blue.png" />120</div>
<div><img src="images/comments.png" />45</div>
<div><img src="images/share.png" />200</div>
          </div>
          <div className="post-profile-icon">
<img src="images/profile-pic.png" /> <img src="images/caret-down.png" />

          </div>

        </div>
        <div className="post-container">
          <div className="post-row">
 <div className="user-profile">
            <img src="images/cbbae.jpeg" />
            <div>
              <p>Agbai Christiana</p>
            <span>Jan 01 2023, 20:15 pm</span>
            </div>
          </div>

          </div>
         
        </div>

        <p className="post-text">Subscribe <span>Christiana  Project </span>YouTube Channel to watch more videos on website development and UI designs. <a href="#">#Christiana  Project</a> <a href="#">Channels</a></p>
        <img src="images/feed-image-4.png" className="post-img"/>



        <div className="post-row">
          <div className="activity-icons">
<div><img src="images/like-blue.png" />120</div>
<div><img src="images/comments.png" />45</div>
<div><img src="images/share.png" />200</div>
          </div>
          <div className="post-profile-icon">
<img src="images/profile-pic.png" /> <img src="images/caret-down.png" />

          </div>

        </div>

        
<button type="button" className="load-more-btn">Load More</button>
      </div>





    {/*   <!--  right side bar --> */}
      <div className="right-sidebar">

        <div className="sidebar-title">
          <h4>Events</h4>
          <a href="#">See All</a>
        </div>
        <div className="event">
          <div className="left-event">
            <h3>14<sup>th</sup></h3>
            <span>Sept</span>
            
          </div>
          <div className="right-event">
            <h4>frontend Developer</h4>
            <p><box-icon type='solid' name='bell'></box-icon>Christiana Tech</p>
            <a href="#">More info</a>
          </div>
        </div>
        <div className="event">
          <div className="left-event">
            <h3>22<sup>th</sup></h3>
            <span>June</span>
            
          </div>
          <div className="right-event">
            <h4>Backend Developer</h4>
            <box-icon type='solid' name='bell'></box-icon>
            <p>Christiana Tech</p>
            <a href="#">More info</a>
          </div>
        </div>
        <div className="sidebar-title">
          <h4>Avertisement</h4>
          <a href="#">Close</a>
        </div>
        <img src="images/advertisement.png" className="sidebar-ads"/>
        <div className="sidebar-title">
          <h4>conversation</h4>
          <a href="#">Hide Chat</a>
        </div>
      <div className="online-list">
        <div className="online">
          <img src="images/member-1.png" alt=""/>
        </div>
        <p>Agbai Christiana</p>
      </div>

      <div className="online-list">
        <div className="online">
          <img src="images/member-2.png" alt=""/>
        </div>
        <p>Jackson Mina</p>
      </div>

      <div className="online-list">
        <div className="online">
          <img src="images/member-3.png" alt=""/>
        </div>
        <p>Samona Mina</p>
      </div>
      <div className="footer">
      <p className="coy">&copy; Christiana project - 2023.</p>
    </div>
    </div>
    </div>
  )
}

export default StartCompontent