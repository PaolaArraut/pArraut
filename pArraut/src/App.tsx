import React from "react";
import { BrowserRouter, Routes, Route } from "react";
import LandingPageView from "./pages/landingPageView";
import "./App.css";

function App(): React.JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
