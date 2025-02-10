import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import LazyPage4 from "../pages/LazyPage4";
import LazyPage6 from "../pages/LazyPage6";
import LazyPage5 from "../pages/LazyPage5";

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        <li>
          <NavLink to="lazy4">Lazy 4</NavLink>
        </li>
        <li>
          <NavLink to="lazy5">Lazy 5</NavLink>
        </li>
        <li>
          <NavLink to="lazy6">Lazy 6</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy4" element={<LazyPage4 />} />
        <Route path="lazy5" element={<LazyPage5 />} />
        <Route path="lazy6" element={<LazyPage6 />} />

        {/* <Route path="*" element={<div>Not Found</div>} /> */}
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>

    </div>
  )
}

export default LazyLayout;
