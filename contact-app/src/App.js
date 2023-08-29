import { BrowserRouter } from "react-router-dom";
import RouterPage from "./components/RouterPage";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <RouterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
