import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import FoodDetail from "./pages/FoodDetail"
import Login from "./pages/Login"
import { useState } from "react";
import About from "./pages/About"

function App() {
  const [username, SetUsername] = useState("a")
  const [detaildata, SetDetailData] = useState([])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home username={username} SetDetailData={SetDetailData} SetUsername={SetUsername}/>}/>
        <Route index path="/" element={<Login SetUsername={SetUsername}/>}/>
        <Route path="/Detail" element={<FoodDetail SetUsername={SetUsername} data={detaildata}/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
