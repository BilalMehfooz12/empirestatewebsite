import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import contactImage from "../../../Image/contact_image_2.jpg";
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
            <form
              action="https://formsubmit.co/bilalmehfooz253@gmail.com"
              onsubmit="myFunction()"
              method="POST"
              class=" p-4 p-md-5 contact-form"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                href="#footer"
                value="http://localhost:3000"
              />
              <h4>Drop Your Message Here</h4>
              <label>Name</label>
              <br></br>
              <input type="name" name="Name" required autoComplete="off" />
              <br></br>
              <br></br>
              <label>Email</label>
              <br></br>
              <input type="email" name="Email" />
              <br></br>
              <br></br>
              <label>Contact No</label>
              <br></br>
              <input type="text" name="Contact" />
              <br></br>
              <br></br>
              <label>Message</label>
              <br></br>
              <textarea name="Message" />
              <br></br>
              <br></br>
              <button
                type="submit"
                style={{ backgroundColor: "rgb(0,134,173)", border: "none" }}
              >
                Submit
              </button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container className="what_app_main">
          <Grid item lg={2}>
            <Button className="what_app_btn">Request a call back</Button>
          </Grid>
          <Grid item lg={0.6} className="what_app_icon_main">
            <PhoneEnabledIcon className="what_app_icon" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;
