import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInOutContainer from "./container";
import PrivateComponent from "./PrivateComponent";
import PrivateComponent2 from "./PrivateComponent2";
import Home from "./components1/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateComponent2 />}>
          <Route path="/" element={<SignInOutContainer />} />
        </Route>

        <Route element={<PrivateComponent />}>
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
