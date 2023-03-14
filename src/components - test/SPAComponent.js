import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function SPAComponent() {
  return (
    <div className="container">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/html">HTML</Link>
            </li>
            <li>
              <Link to="css">CSS</Link>
            </li>
            <li>
              <Link to="js">Javascript</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="html"
            element={
              <main>
                <h2>zhtml</h2>
                <p>Its a markup language</p>
              </main>
            }
          ></Route>

          <Route
            path="css"
            element={
              <main>
                <h2>css</h2>
                <p>Its a styles language</p>
              </main>
            }
          ></Route>

          <Route
            path="js"
            element={
              <main>
                <h2>Javascript</h2>
                <p>Its a language</p>
              </main>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
