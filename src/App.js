//Libraries
import {Routes,Route} from "react-router-dom"

//Components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/root.css"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/listado" element={<Listado/>}/>
    </Routes>
    {/* <Footer/> */}
    </>
  );
}

export default App;
