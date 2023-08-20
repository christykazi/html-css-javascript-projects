import Home from "./home/Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Projectone from "./one/Projectone";
import Projectwo from "./two/Projectwo";
import Projecthree from "./three/Projecthree";
import Projectfour from "./four/Projectfour";


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
      </Routes>
     </BrowserRouter>

    
    </div>
  );
}

export default App;
