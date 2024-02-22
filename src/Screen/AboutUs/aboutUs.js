import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import About_image from "../../Image/contact_image_2.jpg";
import "./about.css";
const AboutUs = () => {

  return (
    <div className="about_main_height">
      <Container>
        <Grid container gap={5} className="about_main">
          <Grid item lg={5.5} md={5.5} sm={12} className="about_text">
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
            <img src={About_image} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
