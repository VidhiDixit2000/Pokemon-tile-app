import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./pages/signinPage";
import Dashboard from "./pages/dashboard";
import Details from "./pages/Details";
import PrivateRoute from "./components/Privateroute";



function App() {
  return (
    <div>
  
      <Routes>
        <Route path="/" exact element={<PrivateRoute><Dashboard/></PrivateRoute>}/> 
        <Route path="/signinPage" exact element={<SigninPage/>} />
        <Route path="/details" exact element={<Details/>} />
      </Routes>

    </div>
  );
}

export default App;
