import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import "./styles/App.css";

import { ScrollTop } from "./utils/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
