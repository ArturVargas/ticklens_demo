import React from "react";
import EventCard from "../../Components/Event-card/Event-card";

const events = [
  {
    title:"Evento 1",
    ticketsTotal:"200",
    ticketsSold:"100",
    price:"1400",
    eventDate:"Thu, Nov 24 2022 - Sun, Nov 27 2022",
    eventPlace:"Independence Palace, 135 Nam Ky Khoi Nghia Stre",
    description:"lorem Ipsum dolor sit amet, consectetur adipiscing el"
  },
  {
    title:"Evento 2",
    ticketsTotal:"5000",
    ticketsSold:"300",
    price:"120",
    eventDate:"Thu, Nov 21 2022",
    eventPlace:"Place 3 Palace, 135 Nam Ky Khoi Nghia Stre",
    description:"lorem Ipsum dolor sit amet, consectetur adipiscing el"
  },
  {
    title:"Evento 3",
    ticketsTotal:"500",
    ticketsSold:"300",
    price:"1200",
    eventDate:"Thu, Dec 24 2022 -",
    eventPlace:"Place 3 Palace, 135 Nam Ky Khoi Nghia Stre",
    description:"lorem Ipsum dolor sit amet, consectetur adipiscing el"
  },
  {
    title:"Evento 4",
    ticketsTotal:"1000",
    ticketsSold:"320",
    price:"1000",
    eventDate:"Sun, Nov 27 2022",
    eventPlace:"Place 4 Independence Palace, 135 Nam Ky Khoi Nghia Stre",
    description:"lorem Ipsum dolor sit amet, consectetur adipiscing el"
  },
];

function Explore() {
  return ( 
    <>
      <br/>
      <div  className="flex column contain align-item-center">
        {
          events.map(({title, ticketsTotal, ticketsSold, price, eventDate, eventPlace, description}, id) =>  {
            return (
                <EventCard
                  key={title + id}
                  title={title}
                  ticketsTotal={ticketsTotal}
                  ticketsSold={ticketsSold}
                  price={price}
                  eventDate={eventDate}
                  eventPlace={eventPlace}
                  description={description}
                />

            );
          })
        }
      </div>

    </>
  );
}

export default Explore;
