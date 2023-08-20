import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import EventSection from './Components/EventSection';
import BookingForm from './Components/BookingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <EventSection></EventSection>
      <BookingForm></BookingForm>
    </div>
  );
}

export default App;
