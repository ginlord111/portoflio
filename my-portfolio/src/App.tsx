import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Work from  './components/Work';
function App() {
  return (
    <div className='App h-screen w-screen overflow-x-clip '>
   <Navbar />
   <Home />
   <About />
   <Work />
   <Skills />
   <Contact />
    </div>
  )
}

export default App
