
import Button from '@mui/material/Button';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { EventCardModel } from '../../Interfaces/EventCard';
//style
require('./Event-card.css');


function EventCard({title, ticketsTotal, ticketsSold, price, eventDate, eventPlace, description} : EventCardModel){
  
  const shortDescription = description.slice(0,70) + '...';
  return (
    <>
      <div className="eventCard margin-top-m">
          <div className="content">
              <div className="flex column align-item-center front">
                <img className="imageEvent" src="https://api.web3events.ai/media/QmRSSSMDBYzdaBtxZsjuFRfFfAWc2G66mooCh7XeFcHziC" alt="evento"/>
                  <h3 className="title">{ title }</h3>
                  <div className="flex row">
                    <LocalActivityIcon/>
                    <div className="description">{ticketsSold}/{ticketsTotal} Tickets Sold</div>
                  </div>
              </div>
              <div className="flex column back ">
                <h2>From ${ price }</h2>
                <div className="flex row">
                  <EventIcon/>
                  <div>{ eventDate }</div>
                </div>
                <div className="flex row">
                  <LocationOnIcon/>
                  <div>{ eventPlace }</div>
                </div>
                  <div className="description">
                      <h3>About the event:</h3>
                      { shortDescription }
                  </div>
                  <div className="flex row margin-top-s justify-space-between margin-top-xl">
                    <Button variant="contained">Buy a Ticket</Button>
                    <Button variant="contained">More Info</Button>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default EventCard;
