import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import About_image from "../../Image/contact_image_2.jpg";
import empirAbout from "../../Image/aboutEmpireImage.jpeg";
import Footer from "../../Component/Footer";
import "./about.css";
const AboutUs = () => {
  return (
    <div>
      <Container>
        <Grid container gap={5}>
          <Grid item lg={12} style={{ marginTop: "3%" }}>
            <img src={empirAbout} style={{ width: "100%", height: "auto" }} />
          </Grid>
          {/* <Grid item lg={5.5} md={5.5} sm={12} className="about_text">
            <h4>EMPIRE STATE TECH SOLUTION (ESTS)</h4>
            <p>
              ESTS Tech Academy is a US-Based Startup empowering IT
              Professionals for a Better Future. ESTS aims to help the students
              succeed by providing innovative learning programs,
              apprenticeships, and career coaching that cater to the industry's
              most in-demand diverse roles with personalized academic rigor,
              coaching and great flexibility.
            </p>
          </Grid>
          <Grid item lg={5.5} md={5.5} sm={12} className="about_image">
            <img src="https://nmcdn.io/e186d21f8c7946a19faed23c3da2f0da/556712d9bf0f4cb2a916cc810687d52b/files/blogimages/October/Client-handshake.jpg" />
          </Grid> */}
        </Grid>
      </Container>
      {/* <Footer className="footer_about" /> */}
    </div>
  );
};

export default AboutUs;
