import Navbar from './components/Navbar/Navbar';
import { About, Footer, Header, Skills, Work } from './pages';
import './App.scss';
import CV from './components/CV';
import GoToTop from './components/GoToTop';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [show, setShow] = useState(false);
  document.addEventListener('scroll', function () {
    if (scrollY > 400) {
      setShow(true);
    }

    if (scrollY < 400) {
      setShow(false);
    }
  });

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
      <CV />
      {show && <GoToTop />}
      <div className="copyright">
        <p>
          &copy; 2023 <span> Nouman Ejaz </span>
        </p>
        <p>All rights reserved</p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
