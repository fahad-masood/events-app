import React from "react";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();
  return <EventList items={events} />;
};

export default AllEventsPage;
