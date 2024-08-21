"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import SearchBar from "./SearchBar";
import { Dropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// images
import HobbyCueLogo from "../../../public/HobbyCueLogo.svg";
import cart from "../../../public/cart.png";
import saved from "../../../public/saved.png";
import notification from "../../../public/notification.png";
import star from "../../../public/star.png";
import compass from "../../../public/compass.png";

// css
import "./searchbar.css";

const Header = () => {
  return (
    <nav
      className=" navbar navbar-expand-lg d-flex align-item-center justify-content-between"
      style={{ backgroundColor: "#ffffff", padding: 10, width: "100vw" }}
    >
      <div className=" d-flex align-items-center">
        {/* logo */}
        <Link href="/" className="navbar-brand ">
          <Image
            priority
            src={HobbyCueLogo}
            height={60}
            width={"40%"}
            alt="logo"
          />
        </Link>

        {/* search bar */}
        <SearchBar />
      </div>

      <div
        className=" d-flex justify-content-between"
        style={{ marginRight: ".5rem" }}
      >
        <div className="d-flex align-items-center" style={{ marginRight: 24 }}>
          <Image priority src={compass} height={24} width={24} alt="star" />

          <Dropdown className="ms-2">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Explore
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Explore 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Explore 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Explore 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex align-items-center">
          <Image priority src={star} height={32} width={32} alt="star" />

          <Dropdown className="ms-2">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Hobbies
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"> Hobbies 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2"> Hobbies 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3"> Hobbies 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  d-flex ms-auto">
            <li
              className="nav-item"
              style={{ marginRight: 24, marginLeft: 24 }}
            >
              <Link href="/" className="nav-link">
                <i className="bi bi-bookmark"></i>
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: 24 }}>
              <Link href="/" className="nav-link">
                <i className="bi bi-bell"></i>
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: 24 }}>
              <Link href="/" className="nav-link">
                <i className="bi bi-cart"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/signin" className="btn btn-outline-primary">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
