import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";
import HomePage from "./components/pages/HomePage";

// React fontawesome components
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLock,
  faPlus,
  faEnvelope,
  faBell,
  faPhone,
  faAt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

// Top level fontawesome icons imports
library.add(faLock, faPlus, faEnvelope, faBell, faPhone, faAt, faInfoCircle);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route component={HomePage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
