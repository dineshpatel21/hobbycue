import img1 from "../../../public/img1.png";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div
      className="col-md-12"
      style={{
        backgroundColor: "white",
        padding: 100,
        paddingLeft: 100,
      }}
    >
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">
            <button
              style={{
                backgroundColor: "rgba(0, 150, 200, 1)",
                borderRadius: 100,
                width: 33.33,
                height: 33.33,
                borderWidth: 0,
                marginRight: 24,
              }}
            >
              <i class="bi bi-quote" style={{ color: "white" }}></i>
            </button>
            Testimonials
          </h5>
          <p className="card-text">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          <div className="resp d-flex align-items-center justify-content-between">
            <div
              className=" d-flex align-items-center"
              style={{
                backgroundColor: "rgba(204, 193, 218, 1)",
                //padding: 15,
                borderRadius: 8,
                width: "40%",
              }}
            >
              <audio
                style={{
                  marginRight: 38,
                  backgroundColor: "rgba(204, 193, 218, 1)",
                  width: "40%",
                }}
                controls
              ></audio>
              <div style={{ position: "relative" }}>
                <i
                  class="bi bi-mic-fill"
                  style={{
                    position: "absolute",
                    bottom: 6,
                    left: 10,
                    color: "white",
                  }}
                ></i>
                <Image
                  priority
                  src={img1}
                  height={60}
                  width={60}
                  alt="star"
                  style={{ marginRight: 24 }}
                />
              </div>
            </div>
            <div className="d-flex align-item-center">
              <Image
                priority
                src={img1}
                height={100}
                width={100}
                alt="star"
                style={{ marginRight: 24 }}
              />
              <div className="d-flex flex-column justify-content-center">
                <h2 style={{ color: "rgba(128, 100, 162, 1)", fontSize: 18 }}>
                  Shubha Nagarajan
                </h2>
                <span style={{ color: "rgba(0, 150, 200, 1)", fontSize: 14 }}>
                  Classical Dancer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
