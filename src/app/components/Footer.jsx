import Link from "next/link";
import Image from "next/image";

// import images
import footerImage from "../../../public/end.png";
import search from "../../../public/search.png";
import facebook from "../../../public/facebook.png";
import twitter from "../../../public/twitter.png";
import instagram from "../../../public/instagram.png";
import pinterest from "../../../public/pinterest.png";
import google from "../../../public/google.png";
import youtube from "../../../public/youtube.png";
import telegram from "../../../public/telegram.png";
import email from "../../../public/email.png";

// styling
import "./footer.css";

const Footer = () => {
  return (
    <div className="col-12 w-100 d-flex flex-column">
      <h1
        style={{
          marginTop: 100,
          fontStyle: "italic",
          fontSize: 36,
          marginBottom: 30,
          marginLeft: "2%",
        }}
      >
        Your <span style={{ color: "rgba(128, 100, 162, 1)" }}>Hobby</span>,
        Your <span style={{ color: "rgba(0, 150, 200, 1)" }}>Community...</span>
      </h1>

      <button
        className="btn btn-outline-primary "
        style={{ width: "8rem", marginLeft: "2%" }}
      >
        Get started
      </button>
      <Image
        priority
        src={footerImage}
        height={302}
        width={"90%"}
        alt="star"
        //style={{ marginTop: 100, marginLeft: 100 }}
      />
      <div className=" col-12 d-flex justify-content-around resp-f" style={{ paddingTop: 60 }}>
        <div className="resp-f1">
          <h2
            style={{
              fontSize: 14,
              color: "rgba(8, 9, 10, 1)",
              fontWeight: "800",
             
            }}
          >
            hobbycue
          </h2>
          <ul className="Links">
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                Work With Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="resp-f1">
          <h2
            style={{
              fontSize: 14,
              color: "rgba(8, 9, 10, 1)",
              fontWeight: "800",
             
            }}
          >
            How Do I
          </h2>
          <ul className="Links">
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                Add a Listing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                Claim Listing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                Post a Query
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                Add a Blog Post
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                Other Queries
              </Link>
            </li>
          </ul>
        </div>

        <div className="  d-flex flex-column justify-content-start">
          <h2
            style={{
              fontSize: 14,
              color: "rgba(8, 9, 10, 1)",
              fontWeight: "800",
              
            }}
          >
            Quick Links
          </h2>
          <ul className="Links">
            <li>
              <Link
                href="#"
                style={{
                  color: "rgba(8, 9, 10, 1)",
                  textDecoration: "none",
                  textAlign: "left",
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                Work With Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgba(8, 9, 10, 1)", textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className=" d-flex flex-column justify-content-between">
          <div>
            <h2
              style={{
                marginBottom: 16,
                fontSize: 14,
                color: "rgba(8, 9, 10, 1)",
                fontWeight: "800",
              }}
            >
              Social media
            </h2>
            <div className="d-flex">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "100%",
                  backgroundColor: "#f2f2f2",
                  marginRight: 24,
                }}
              >
                <Link href="/facebook">
                  <Image
                    priority
                    src={facebook}
                    height={16}
                    width={16}
                    alt="facebook"
                  />
                </Link>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "100%",
                  backgroundColor: "#f2f2f2",
                  marginRight: 24,
                }}
              >
                <Link href="/twitter">
                  <Image
                    priority
                    src={twitter}
                    height={16}
                    width={16}
                    alt="twitter"
                  />
                </Link>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "100%",
                  backgroundColor: "#f2f2f2",
                  marginRight: 24,
                }}
              >
                <Link href="/instagram">
                  <Image
                    priority
                    src={instagram}
                    height={16}
                    width={16}
                    alt="instagram"
                  />
                </Link>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "100%",
                  backgroundColor: "#f2f2f2",
                  marginRight: 24,
                }}
              >
                <Link href="/pinterest">
                  <Image
                    priority
                    src={pinterest}
                    height={16}
                    width={16}
                    alt="pinterest"
                  />
                </Link>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "100%",
                  backgroundColor: "#f2f2f2",
                  marginRight: 24,
                }}
              >
                <Link href="/google">
                  <Image
                    priority
                    src={google}
                    height={16}
                    width={16}
                    alt="google"
                  />
                </Link>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "100%",
                  backgroundColor: "#f2f2f2",
                  marginRight: 24,
                }}
              >
                <Link href="/youtube">
                  <Image
                    priority
                    src={youtube}
                    height={16}
                    width={16}
                    alt="youtube"
                  />
                </Link>
              </div>
              <div
                className=" d-flex align-items-center justify-content-center"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "100%",
                  backgroundColor: "#f2f2f2",
                  marginRight: 24,
                }}
              >
                <Link href="/telegram">
                  <Image
                    priority
                    src={telegram}
                    height={16}
                    width={16}
                    alt="telegram"
                  />
                </Link>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "100%",
                  backgroundColor: "#f2f2f2",
                }}
              >
                <Link href="/email">
                  <Image
                    priority
                    src={email}
                    height={16}
                    width={16}
                    alt="email"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <h2
              style={{
                fontSize: 14,
                color: "rgba(8, 9, 10, 1)",
                fontWeight: "800",
              }}
            >
              Invite Friends
            </h2>
            <div
              style={{ marginTop: 16 }}
              className="input-group mb-3 rounded d-flex align-items-center"
              style={{ maxWidth: "400px" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search here..."
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <Image
                    priority
                    src={search}
                    height={16}
                    width={16}
                    alt="logo"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "rgba(247, 245, 249, 1)", height: 78 }}
      >
        <h3 style={{ fontSize: 14 }}>© Hobby Cues Private Limited</h3>
      </div>
    </div>
  );
};

export default Footer;
