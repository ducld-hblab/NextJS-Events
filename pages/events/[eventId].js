import EventContent from "../../components/event-detail/event-content";
import { useRouter } from 'next/router';
import { getEventById } from "../../dummy-data";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";

function DetailEventPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const eventItem = getEventById(eventId);

  if (!eventItem) {
    return <p>Event Not Found!</p>
  }

  return (
    <>
      <EventSummary title={eventItem.title} />
      <EventLogistics event={eventItem} />
      <EventContent><p>{eventItem.description}</p></EventContent>
    </>
  )
}

export default DetailEventPage;