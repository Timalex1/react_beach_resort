import './App.css';
import Home from "./components/pages/Home";
import Rooms from "./components/pages/Rooms";
import SingleRoom from "./components/pages/SingleRoom";
import Error from "./components/pages/Error";
import React from "react";
import {Route, Routes} from "react-router-dom"

function App() {
  return (
        <Routes>

            <Route path="/" exact element={<Home />} />

            <Route path="rooms" element={<Rooms />} />

            <Route path="rooms/:roomId" element={<SingleRoom />} />

            <Route path="*" element={<Error />} />
        </Routes>
  );
}

export default App;
