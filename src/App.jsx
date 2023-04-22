import { BrowserRouter } from "react-router-dom";
import {About,Contact,Experience , Feats ,Hero , Navbar ,
   Tech , Works , StarsCanvas} from './components'
import Motivation from "./components/Motivation";


const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-centre">
          <Navbar/>
          <Hero />
        </div>
        <About/>
        <Experience/>
        {/* <Tech/> */}
        <Works/>
        <Motivation/>
        <Feats/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
   
  )
}

export default App
