import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import EventSection from './Components/EventSection';
import BookingForm from './Components/BookingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <EventSection></EventSection>
      <BookingForm></BookingForm>
    </div>
  );
}

export default App;
