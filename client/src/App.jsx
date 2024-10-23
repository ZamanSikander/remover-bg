import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Logic from "./pages/Logic";
import Home from "./pages/Home";
// import RemoverBg from "./components/RemoverBg";
export const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Logic" element={<Logic/>}/>
        </Routes>
      </Router>
      {/* <RemoverBg/> */}

    </div>
  );
};
