import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/istockphoto-684852806-612x612.jpg";
import courseImg2 from "../../assests/images/160428183940-fentanyl-opioids-drugs-overdose-sanjay-gupta-mobile-orig-mss-00000000.jpg";
import courseImg3 from "../../assests/images/TRVPB-Cocaine-Banner.jpeg";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "3,4-Methyl​enedioxy​methamphetamine",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: " Fentanyl",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Cocaine",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>In Demand Drugs</h2>
                <p>
                In Demand Drugs are the products that are dominating the market due to the marketing strategies of pharmaceutical companies. These medications are prescribed by healthcare professionals who are often influenced by the drug manufacturers' incentives and promotions. While some of these drugs may be effective in treating common conditions, many others are overhyped and unnecessary. The pharmaceutical industry is driven by profits, and the high demand for these drugs allows them to charge exorbitant prices, making healthcare unaffordable for many. The healthcare system needs to address this issue by promoting evidence-based medicine and ensuring that drug prices are reasonable and transparent.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
