import React from 'react';
import {Route, Routes} from "react-router-dom";
import './global-styles/globals.scss'
import Main from "@pages/Main/Main";
function App() {
  return (
      <Routes>
        <Route path={'/'} element={<Main/>}/>

      </Routes>
  );
}

export default App;
