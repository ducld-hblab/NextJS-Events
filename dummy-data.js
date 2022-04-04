const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description: "We know: Networking is no fun if you are an introvent person. That's why we camping",
    location: "New Wall Street 6, 98756 New york",
    date: "2021-05-30",
    image: "images/1.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description: "We know: Networking is no fun if you are an introvent person. That's why we camping",
    location: "New Wall Street 6, 98756 New york",
    date: "2021-05-30",
    image: "images/introvent.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description: "We know: Networking is no fun if you are an introvent person. That's why we camping",
    location: "New Wall Street 6, 98756 New york",
    date: "2021-05-30",
    image: "images/1.jpg",
    isFeatured: true,
  },
]

export const getFeaturesEvents = () => {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export const getAllEvents = () => {
  return DUMMY_EVENTS;
}

export const getFilteredEvents = (dataFilter) => {
  const { year, month } = dataFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export const getEventById = (id) => {
  return DUMMY_EVENTS.find((event) => event.id === id);
}