import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Fashion from "./Fashion";
import Electronics from "./Electronics";
import Footwear from "./Footwear";

export default function ShoppingIndex() {
  return (
    <div className="container">
      <Router>
        <ul>
          <li>
            <Link to="electronics">Electronics</Link>{" "}
          </li>
          <li>
            <Link to="footwear">Footwear</Link>{" "}
          </li>
          <li>
            <Link to="fashion">Fashion</Link>{" "}
          </li>
        </ul>
        <Routes>
          <Route path="/electronics" element={<Electronics />}></Route>
          <Route path="/footwear" element={<Footwear />}></Route>
          <Route path="/fashion" element={<Fashion />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
