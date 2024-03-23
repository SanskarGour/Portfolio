import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Parentpage from "./components/Parentpage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Parentpage />}>

          <Route index element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App;
