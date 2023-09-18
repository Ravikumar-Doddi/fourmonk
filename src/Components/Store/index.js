import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { LuIndianRupee } from "react-icons/lu";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { FiCheck } from "react-icons/fi";
import "./index.css";
import Scooty from "../../assets/scooty.png";
import Scooty2 from "../../assets/scooty2.png";

function Store() {
  const [selectedColor, setSelectedColor] = useState("gray");

  const scootyImages = {
    blue: Scooty2,
    gray: Scooty,
    darkBlue: Scooty2,
    skyBlue: Scooty,
    lightSkyBlue: Scooty2,
    red: Scooty,
    white: Scooty2,
    yellow: Scooty,
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="universal-font">
      <Container fluid>
        <Row>
          <Col md={6} className="top-cont mt-5">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="storie">Storie</div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="color"></div> <div>Sparkling Green</div>
                </div>
              </div>
              <hr className="mt-4" />
              <Col className="d-flex justify-content-center align-items-center mt-5">
                <img
                  src={scootyImages[selectedColor]}
                  alt="scooty"
                  className="img-fluid scooty-img"
                />
              </Col>
              <hr className="d-none d-md-block mt-5" />

              <Row>
                <Col xs={5} sm={5} md={5} lg={6} className="mt-5 mt-md-0 mt-lg-0">
                  <div>
                    <p className="ex-showroom">Booking Amount</p>
                    <div>
                      <LuIndianRupee size={30} className="rupee-icon" />{" "}
                      <span className="rate">2,500/-</span>
                    </div>
                  </div>
                </Col>
                <Col xs={7} sm={7} md={7} lg={6} className="mt-5 mt-md-0 mt-lg-0">
                  <div>
                    <div className="d-flex justify-content-between ex-showroom">
                      *Ex-showroom price in
                      <span className="new-delhi">
                        New Delhi <GoLocation />
                      </span>
                    </div>
                    <div className="incl mb-2">(Incl FAME || Subsidy)</div>

                    <div>
                      <LuIndianRupee size={27} className="rupee-icon" />{" "}
                      <span className="rate2">1,17,357/-</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className=" p-md-3 p-lg-5 p-sm-0  model-view" md={6}>
            <div className="model-view2">
              <div
                className="d-flex justify-content-between flex-wrap mt-5 mt-md-0"
                style={{ whiteSpace: "pre" }}
              >
                <span className="model d-none d-md-inline">
                  01 SELECT MODEL{" "}
                </span>
                <span className="model">02 SELECT COLOR </span>
                <span className="model2">
                  03 YOUR DETAILS AND PREFERED LOCATION
                </span>
              </div>
              <div className="mt-5">
                <h2 className="choose">Choose</h2>
                <h2 className="choose">a Color</h2>
              </div>
              <Card className=" mt-1 p-3 p-md-5 mt-md-5">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-start align-items-center ">
                    <FiCheck size={25} className="check-icon" />
                    <div>
                      <span className="storie">Storie</span> <br />
                      <span className="storie2">Sparkling Green</span>
                    </div>
                  </div>

                  <img
                    src={scootyImages[selectedColor]}
                    alt="scooty"
                    className="img-fluid scooty-img2"
                  />
                </div>
                <div className="d-flex justify-content-between mt-5">
                  <div
                    className="picked-color selected-gray"
                    onClick={() => handleColorSelection("gray")}
                  ></div>
                  <div
                    className="picked-color selected-blue "
                    onClick={() => handleColorSelection("blue")}
                  ></div>
                  <div
                    className="picked-color selected-dark-blue"
                    onClick={() => handleColorSelection("darkBlue")}
                  ></div>
                  <div
                    className="picked-color selected-sky-blue"
                    onClick={() => handleColorSelection("skyBlue")}
                  ></div>
                  <div
                    className="picked-color selected-light-sky-blue"
                    onClick={() => handleColorSelection("lightSkyBlue")}
                  ></div>
                  <div
                    className="picked-color selected-red"
                    onClick={() => handleColorSelection("red")}
                  ></div>
                  <div
                    className="picked-color selected-white"
                    onClick={() => handleColorSelection("white")}
                  ></div>
                  <div
                    className="picked-color selected-yellow"
                    onClick={() => handleColorSelection("yellow")}
                  ></div>
                </div>
              </Card>
              <div className="confirm-btn d-flex justify-content-between align-items-center mt-3 mt-md-5 mb-2 mb-md-0 ">
                <span className="fs-6">CONFIRM</span>
                <HiOutlineArrowLongRight size={25} />
              </div>
            </div>
          </Col>
          <Col className="footer-view">
            <div className="footer">
              <div className="d-flex flex-column justify-content-between align-items-center  flex-md-row">
                <h2 className="footer-head mt-5 mb-4 mb-md-0">
                  Stay Informed <br />
                  About Battre
                </h2>
                <div className="input-cont d-flex">
                  <input placeholder="Your email ID" className="input-el p-3" />
                  <button className="sub-btn">Subscribe</button>
                </div>
              </div>
              <hr />
              <div className="d-flex flex-wrap justify-content-between mb-3 mb-md-5">
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="d-none d-lg-block">
                    <div className="adress">
                      Kasra No 351, 80 Feet Road <br /> Vinayak City <br /> Guru
                      Marg, Sirsi Road
                      <br />
                      Neemera, Bindayaka
                      <br />
                      <br /> Jaipur, Rajasthan, 302041
                      <br /> <br />
                      CIN: U29100RJ2017PTC059452
                    </div>
                  </div>
                  <div className="d-block d-lg-none mb-4">
                    <div className="adress ">
                      Kasra No 351, 80 Feet Road Vinayak City <br /> Guru Marg,
                      Sirsi Road Neemera, Bindayaka
                      <br />
                      <br />
                      Jaipur, Rajasthan, 302041
                      <br /> <br />
                      CIN: U29100RJ2017PTC059452
                    </div>
                  </div>
                </Col>
                <div></div>
                <Col xs={6} sm={6} md={6} lg={2}>
                  <ul className="list-cont lg-2">
                    <li className="child-head mb-2">Models</li>
                    <li className="list-child">Storie</li>
                    <li className="list-child">One</li>

                    <li className="list-child">Loev</li>
                  </ul>
                </Col>
                <Col xs={6} sm={6} md={6} lg={2}>
                  <ul className="list-cont lg-2">
                    <li className="child-head mb-2">Company</li>
                    <li className="list-child">About</li>
                    <li className="list-child">Blog</li>
                  </ul>
                </Col>
                <Col xs={6} sm={6} md={6} lg={2}>
                  <ul className="list-cont">
                    <li className="child-head mb-2">Quick Links</li>
                    <li className="list-child">Become a Dealer</li>
                    <li className="list-child">Locate a Dealer</li>
                    <li className="list-child">Emagine</li>
                  </ul>
                </Col>
                <Col xs={6} sm={6} md={6} lg={2}>
                  <ul className="list-cont">
                    <br />
                    <li className="list-child">Book a Test Ride</li>
                    <li className="list-child">Book Now</li>
                    <li className="list-child">Contact</li>
                  </ul>
                </Col>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-3">
                <Col>
                  <p className="privacy-policy">
                    © 2023 Batt:RE. All rights reserved
                  </p>
                </Col>
                <Col>
                  <div className="privacy-policy d-flex flex-wrap" style={{ whiteSpace: "pre" }}>
                    <span>PRIVACY POLICY</span> <span>     TERMS & CONDITION</span>
                  </div>
                </Col>
                <div className="icons-cont">
                  <AiOutlineInstagram size={25} className="icons m-2" />
                  <CgFacebook size={25} className="icons m-2" />
                  <BsTwitter size={25} className="icons m-2" />
                  <BiLogoLinkedin size={25} className="icons m-2" />
                  <AiFillYoutube size={25} className="icons m-2" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Store;
