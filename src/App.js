import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./index.css";
import Header from "./components/header";
import PhotoGrid from "./components/photogrid";
import ParallaxOne from "./components/parallaxone";
import Services from "./components/services";
import ContactForm from "./components/contactform";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PhotoGrid />
      <ParallaxOne />
      <Services />
      <ParallaxOne />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
