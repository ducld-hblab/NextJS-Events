import { EventList } from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

function AllEventsPage() {
  const listEvents = getAllEvents();
  const router = useRouter();

  const handleFindEvents = (year, month) => {
    const eventRouter = `/events/${year}/${month}`;

    router.push(eventRouter);
  };

  return (
    <>
      <EventsSearch onSearch={handleFindEvents} />
      <EventList items={listEvents} />{" "}
    </>
  );
}

export default AllEventsPage;
