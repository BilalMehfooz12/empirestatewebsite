import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import About_image from "../../Image/contactImage.jpg";
import "./about.css";
const AboutUs = () => {
  return (
    <div>
      <Container>
        <Grid container gap={5} className="about_main">
          <Grid item lg={5.5} md={5.5} sm={12} className="about_text">
            <h4>EMPIRE STATE TECH SOLUTION (ESTS)</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy
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
