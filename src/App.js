import React from 'react'
import "./App.css";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {ToastContainer,Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer
   position="top-center"
   autoClose={3000}
   hideProgressBar
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable={false}
   pauseOnHover
   theme="dark"
    transition={Slide}
    />
      <Header />
      <main>
        <article>
          {/* #HERO*/}

          <Hero />

          {/*#ABOUT*/}

          <About />

          {/*#Projects*/}

          <Projects />

          {/* #SKILLS*/}

          <Skills />

          {/*#CONTACT*/}
          <Contact />
        </article>
      </main>
      {/*#FOOTER*/}

      <Footer />
      {/*#BACK TO TOP-->*/}
      <BackToTop />
    </>
  );
}

export default App;
