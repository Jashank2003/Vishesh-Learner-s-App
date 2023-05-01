import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/Pablo_Escobar_Mug.jpg";
import "./hero-section.css";

// const [SearchInput, setSearchInput] = useState("");
// const Drugs = [
//   { name: ""}
// ]
// ]

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Discover pure bliss with <br /> MyEcstasy - your ultimate destination <br /> for all things euphoric.
              </h2>
              <p className="mb-5">
              Discover pure bliss with MyEcstasy's range of high-quality products designed to enhance your mood, reduce stress, and increase energy levels. Our team of experts rigorously tests all our products to ensure maximum potency and effectiveness, providing you with a safe and enjoyable experience. Browse our range today and explore euphoria with MyEcstasy.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
