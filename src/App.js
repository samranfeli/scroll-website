import { Fragment, useState } from "react";
import Header from "./Components/Header";
import Home from './pages/Home';
import Footer from "./Components/Footer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ContactPage from "./Components/ContactPage";

function App() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Header visible={!isHeaderHidden} hideFirst={true} />
              <Home />
            </Fragment>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Fragment>
              <Header visible={true} />
              <ContactPage />
              <Footer />
            </Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
