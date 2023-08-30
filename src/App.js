import Header ,{HeaderPhone} from "./components/header.jsx"
import Home from "./components/Home.jsx"
import Work from "./components/worked.jsx"
import Timeline from "./components/Timeline.jsx"
import Services from "./components/Services.jsx"
import Testimonial from "./components/Testimonial.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import { Toaster } from "react-hot-toast"
import "./styles/App.scss"
import { useState } from "react"



function App() {


  const [menuOpen, setMenuOpen] = useState(false);
  console.log(setMenuOpen)


  return (
    <>
      <HeaderPhone  menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
     
</>
    
  );
}

export default App;
