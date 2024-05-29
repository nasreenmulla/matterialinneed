import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import SelectBank from "./components/SelectBank/Selectbank";
import AddPaye from "./components/AddPaye/AddPaye";
import Batch from "./components/Batch/Batch"
import AddBank from "./components/AddBank/AddBank";
import Design from "./components/Design/Design";
import Settings from "./components/Settings/Settings";
import Report from "./components/Report/Report";
import Users from "./components/Users/Users";
import Exit from "./components/Exit/Exit";
import Main from "./components/SelectBank/Main";
import Fill from "./components/SelectBank/Fill";
const AllRoutes=()=>{
    return(
        <Routes>
             <Route exact path="/LoginA" element={<Auth/>}></Route>
             <Route exact path="/home" element={<Home/>}></Route>
             <Route exact path="/SelectBank" element={<Main/>}></Route>
             <Route exact path="/AddPaye" element={<AddPaye/>}></Route>
             <Route exact path="/Batch" element={<Batch/>}></Route>
             <Route exact path="/AddBank" element={<AddBank/>}></Route>
             <Route exact path="/Design" element={<Design/>}></Route>
             <Route exact path="/Settings" element={<Settings/>}></Route>
             <Route exact path="/Report" element={<Report/>}></Route>
             <Route exact path="/users" element={<Users/>}></Route>
             <Route exact path="/Exit" element={<Exit/>}></Route>
        </Routes>
    )
}
export default AllRoutes;
