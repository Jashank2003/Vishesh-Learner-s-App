import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/file-20200304-66078-1tv9x30.avif";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
              At myEcstasy, we believe that we are the best choice for anyone looking to purchase legalized drugs. We understand that our customers are looking for a reliable, trustworthy, and discreet way to purchase their drugs, and we are committed to providing exactly that.

              First and foremost, we take quality seriously. All of our products are rigorously tested to ensure that they are of the highest quality and meet our strict standards. We understand that your health and safety are of the utmost importance, and we will never compromise on the quality of our products.

              In addition, we offer a wide variety of products to suit your needs. Whether you're looking for a boost of energy, a way to relax, or a mind-altering experience, we have something for everyone. Our team of experts is dedicated to staying up-to-date with the latest trends and developments in the industry to ensure that we always have the most cutting-edge products available.

              We also understand that privacy is important to our customers. That's why we offer discreet packaging and shipping to ensure that your order arrives safely and securely, without any unnecessary attention.

              Finally, our customer service is second to none. We pride ourselves on providing a friendly, helpful, and knowledgeable support team to answer any questions you may have and to provide you with the best possible experience.

              So if you're looking for a reliable, trustworthy, and discreet way to purchase legalized drugs, look no further than myEcstasy. We are committed to providing you with the best possible experience and helping you to achieve the experiences you're looking for.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
