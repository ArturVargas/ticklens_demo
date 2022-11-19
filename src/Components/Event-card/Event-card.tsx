//style
require('./Event-card.css');

function EventCard(){
  return (
    <>
      <div className="eventCard">
          <div className="content">
              <div className="front">
                  <h3 className="title">Hey</h3>
                  <p className="subtitle">Hover me :</p>
              </div>
              <div className="back">
                  <p className="description">
                      Cool description so you can read it too my friend
                  </p>
              </div>
          </div>
      </div>
    </>
  )
}

export default EventCard;
