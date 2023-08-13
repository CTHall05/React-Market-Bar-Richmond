import React from 'react';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntroView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="Navbar-Component-Container">
      <h1>Market Bar</h1>
      <nav>
        <ul className="nav-links">
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('events')}>Events</li>
          <li onClick={() => scrollToSection('bookings')}>Bookings</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
