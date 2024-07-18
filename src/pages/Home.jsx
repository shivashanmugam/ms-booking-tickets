import React, { useEffect, useState } from "react";
import { eventsMain } from "../data/events";

export const Home = ({ onEventClick }) => {
  const [events, setEvents] = useState(eventsMain);
  const [search, setSearch] = useState();

  useEffect(() => {
    if (search) {
      const tempEvents = events.filter((e) => {
        return e.name.includes(search);
      });
      setEvents(tempEvents);
    } else {
      setEvents(eventsMain);
    }
  }, [search]);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {events.map((e) => {
        return (
          <div
            onClick={() => {
              onEventClick(e);
            }}
          >
            {e.name}
          </div>
        );
      })}
    </div>
  );
};
