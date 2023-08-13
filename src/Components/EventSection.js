import React from 'react';
import eventsData from './DummyData/eventsData.js';

function EventSection() {
  return (
    <section id="events" className="event-section">
      <h2>Upcoming Events</h2>
      <div className="event-grid">
        {eventsData.map((event) => {
          return (
            <div key={event.id}>
              <h3>{event.name}</h3>
              <p>{event.date}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EventSection;
