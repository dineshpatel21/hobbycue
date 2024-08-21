import Link from "next/link";
import Image from "next/image";

// css
import "./page.css";

//images
import footerImage from "../../public/footerImage.png";

// pages
import CardGrid from "./components/CardGrid";
import AddYourOwn from "./components/AddYourOwn";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
  return (
    <div>
      <div className="d-flex resp" style={{ marginBottom: 5 }}>
        <div className="col-md-5" style={{ marginLeft: "2%", marginTop: "6%" }}>
          <h1
            style={{
              fontSize: 36,
              fontStyle: "italic",
              marginBottom: 32,
              fontWeight: "700",
            }}
          >
            Explore your{" "}
            <span style={{ color: "rgba(0, 150, 200, 1)" }}>hobby</span> or{" "}
            <span style={{ color: "rgba(128, 100, 162, 1)" }}>passion</span>
          </h1>
          <p>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>

          <p>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>

          <Image
            priority
            src={footerImage}
            height={216}
            width={"50%"}
            alt="facebook"
          />
        </div>
        <div className="col-md-7">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Join In
                    </a>
                  </li>
                </ul>
                <div className="p-4 border">
                  <button className="border btn btn-light  mb-2 d-flex align-items-center">
                    <img
                      src="../../google.png"
                      alt="Google"
                      className="me-2"
                      style={{ width: "20px" }}
                    />
                    Continue with Google
                  </button>
                  <button className="border btn btn-light  mb-4 d-flex align-items-center">
                    <img
                      src="../../facebook.png"
                      alt="Facebook"
                      className="me-2"
                      style={{ width: "20px" }}
                    />
                    Continue with Facebook
                  </button>
                  <div className="d-flex align-items-center justify-content-between">
                    <hr style={{ width: "28%" }} />
                    <span
                      style={{ width: "60%", fontSize: 12, marginLeft: "8%" }}
                    >
                      Or connect with
                    </span>
                    <hr style={{ width: "28%" }} />
                  </div>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3 position-relative">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                      <span
                        className="position-absolute top-50 end-0 translate-middle-y pe-3"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="bi bi-eye-slash"></i>
                      </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          style={{ fontSize: 12 }}
                          htmlFor="rememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="mb-3 form-check">
                        <img
                          src="../../lock.png"
                          alt="lock"
                          className="me-2"
                          style={{ width: "20px" }}
                        />
                        <label
                          className="form-check-label"
                          style={{ fontSize: 12, cursor: "pointer" }}
                          htmlFor="rememberMe"
                        >
                          Forgot Password?
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="border"
                      style={{
                        color: "white",
                        fontSize: 14,
                        backgroundColor: "rgba(128, 100, 162, 1)",
                      }}
                      className=" border btn btn-default w-100"
                    >
                      Continue
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardGrid />
      <AddYourOwn />
      <Testimonials />
    </div>
  );
};

export default HomePage;
