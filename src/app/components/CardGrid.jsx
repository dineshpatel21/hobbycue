import "./responsive.css"

const CardGrid = () => {
  return (
    <div
      className="resp-card"
      style={{
        backgroundColor: "white",
        // width: "100vw",
        padding: 100,
      }}
    >
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-people-fill me-2 text-primary"></i>People
              </h5>
              <p className="card-text">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist, or
                collaborator.
              </p>
              <a href="#" className="btn btn-outline-primary">
                Connect
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-geo-alt-fill me-2 text-success"></i>Place
              </h5>
              <p className="card-text">
                Find a class, school, playground, auditorium, studio, shop, or
                an event venue. Book a slot at venues that allow booking through
                hobbycue.
              </p>
              <a href="#" className="btn btn-outline-primary">
                Meet up
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-basket-fill me-2 text-danger"></i>Product
              </h5>
              <p className="card-text">
                Find equipment or supplies required for your hobby. Buy, rent,
                or borrow from shops, online stores, or from community members.
              </p>
              <a href="#" className="btn btn-outline-primary">
                Get it
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-calendar-event-fill me-2 text-info"></i>
                Program
              </h5>
              <p className="card-text">
                Find events, meetups, and workshops related to your hobby.
                Register or buy tickets online.
              </p>
              <a href="#" className="btn btn-outline-primary">
                Attend
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
