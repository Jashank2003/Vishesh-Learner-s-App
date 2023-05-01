import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/powder-coke-drugs-cocaine.jpg";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              Welcome to myEcstasy, your one-stop shop for legalized drugs. We understand that the world is changing and that people are looking for alternative ways to experience life. That's why we provide a wide variety of drugs that are perfectly legal to purchase and consume. Whether you're looking for a boost of energy, a way to relax, or a mind-altering experience, myEcstasy has everything you need.

              At myEcstasy, we pride ourselves on providing the highest quality drugs at the most affordable prices. We understand that our customers are looking for an experience that is both safe and enjoyable, which is why we work tirelessly to ensure that all of our products are rigorously tested and of the highest quality. Our team of experts is dedicated to providing you with the best possible experience, from the moment you place your order to the moment you consume your drug of choice.

              So if you're looking for a new way to experience life, look no further than myEcstasy. Our products are safe, legal, and guaranteed to provide you with the experience you're looking for. Try us out today and experience the difference for yourself. Stay in Developer Mode.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Deliveries</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Customers Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={150} duration={2} suffix="" />
                    </span>
                    <p className="counter__title">Countries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;