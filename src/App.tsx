import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import "./styles/App.css";
import StartPopup from "./components/StartPopup/StartPopup";
import { ScrollTop } from "./utils/ScrollTop";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasConfirmedAge, setHasConfirmedAge] = useState(false);

  useEffect(() => {
    const ageConfirmed = sessionStorage.getItem("ageConfirmed");

    if (ageConfirmed === "true") {
      setHasConfirmedAge(true);
    } else {
      setShowPopup(true);
    }
  }, []);

  const handleConfirmAge = () => {
    setShowPopup(false);
    setHasConfirmedAge(true);
  };

  const handleExitSite = () => {
    setShowPopup(false);
    window.location.href = "https://www.google.com";
  };

  if (!hasConfirmedAge) {
    return (
      <StartPopup onConfirmAge={handleConfirmAge} onExitSite={handleExitSite} />
    );
  }

  return (
    <BrowserRouter>
      <ScrollTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
