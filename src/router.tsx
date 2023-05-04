import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts";
import Home from "./components/pages/home";
import Introdution from "./components/pages/introduction"
import Landing from "./components/pages/landingpages";
import { ROUTER_AZ } from "./constants/route";


const Routers = () => {
  return (
   
      <BrowserRouter>
        <Layout>
        <Routes>
            <Route path={ROUTER_AZ.Trang_chu} element={<Home/>} />
            <Route path={ROUTER_AZ.Gioi_thieu} element={<Introdution/>} />
        </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default Routers;