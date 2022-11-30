import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

//components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Container from "./components/Container"
//context
import {StudantProvider} from "./context/StudantContext"

//pages
import Form from "./pages/Form"
import Content from "./pages/Content"
import FormEdit from "./pages/FormEdit"

function App() {
  return (
    <div className='app_global'>
        <BrowserRouter>
          <StudantProvider>
          <Navbar/>
          <Container>
            <Routes>
              <Route path="/" element={<Form/>}/>
              <Route path="/students" element={<Content/>}/>
              <Route path="/student/:id" element={<FormEdit/>}/>
            </Routes>
          </Container>
            <Footer/>
          </StudantProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
