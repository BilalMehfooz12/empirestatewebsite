import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import contactImage from "../../../Image/contact_image_2.jpg";
import Footer from "../../../Component/Footer";
import { toast } from "react-toastify";

import "./contact.css";
const ContactUs = () => {
  const handleSubmit = async (event) => {
    window.location.href = "/requestCall";
    // toast.success("Our Team Contact You As Soon As Possible Thank You!", {
    //   position: "top-center",
    // });
  };
  return (
    <div className="bg_contact">
      <Container>
        <Grid container className="main_contact" gap={5}>
          <Grid item lg={5} xs={12} className="conatact_image">
            <img src={contactImage} />
          </Grid>
          <Grid item lg={5} md={12} sm={12} xs={12} className="contact_form">
            <form
              action="https://formsubmit.co/empirestatetechsolutions@gmail.com
              "
              onSubmit={handleSubmit}
              method="POST"
              class=" p-4 p-md-5 contact-form"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                href="#footer"
                value="https://empirestatewebsite.vercel.app/thank"
              />
              <h4>Dropsdas Your Message Here</h4>
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
              <button type="submit" id="contact_btn_home_page">
                Submit
              </button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
