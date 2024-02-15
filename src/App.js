import Home from "./home/Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Projectone from "./one/Projectone";
import Projectwo from "./two/Projectwo";
import Projecthree from "./three/Projecthree";
import Projectfour from "./four/Projectfour";
import Facebook from "./facebook/Facebook";
import Linkedin from "./linkedin/Linkedin";
import Youtube from "./youtube/Youtube";
import Netflix from "./netflix/Netflix";
import Airbnb from "./airbnb/Airbnb";
import Start from "./start/Start";


function App() {
  return (
    <div > 
     <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/projectone" element ={<Projectone/>} />
        <Route path="/projectwo" element = {<Projectwo/>}/>
        <Route path="/projecthree" element = {<Projecthree/>}/>
        <Route path="/projectfour" element = {<Projectfour/>}/>
        <Route path="/facebook" element = {<Facebook/>}/>
        <Route path="/start" element = {<Start/>}/>
        <Route path="/linkedin" element = {<Linkedin/>}/>
        <Route path="/youtube" element = {<Youtube/>}/>
        <Route path="/netflix" element = {<Netflix/>}/>
        <Route path="/airbnb" element = {<Airbnb/>}/>
      </Routes>
     </BrowserRouter>

    
    </div>
  );
}

export default App;
