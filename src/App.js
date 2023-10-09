import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProjectDisplay from './Components/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/PortFolio_React'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/project/:id' element={<ProjectDisplay/>}></Route>
        <Route path='/experience' element={<Experience/>}></Route>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
