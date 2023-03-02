import './App.css';
import About from './Components/About/About';
import Contacts from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Resumes from './Components/Resumes/Resumes';
import Footer from './Components/Footer/Footer';
function App() {
  return (
      <div>
        <Header />
        <Home />
        <About />
        <Resumes />
        <Contacts />
        <Footer />
      </div>
  );
}

export default App;
