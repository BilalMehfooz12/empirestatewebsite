import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import contactImage from "../../../Image/userbgImage.png";
import "./contact.css";
const ContactUs = () => {
  return (
    <div className="bg_contact">
      <Container>
        <Grid container className="main_contact" gap={5}>
          <Grid item lg={5} xs={12} className="conatact_image">
            <img src={contactImage} />
          </Grid>
          <Grid item lg={5} md={12} sm={12} xs={12} className="contact_form">
            <h4>Drop Your Message Here</h4>
            <label>Name</label>
            <br></br>
            <input type="text" />
            <br></br>
            <br></br>
            <label>Email</label>
            <br></br>
            <input type="text" />
            <br></br>
            <br></br>
            <label>Contact No</label>
            <br></br>
            <input type="text" />
            <br></br>
            <br></br>
            <label>Message</label>
            <br></br>
            <textarea type="text" />
            <br></br>
            <br></br>
            <Button style={{ backgroundColor: "rgb(0,134,173)" }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;
