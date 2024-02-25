import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { toast } from "react-toastify";
import Footer from "../../Component/Footer";
import "./index.css";
const Contacts = () => {
  const handleSubmit = async (event) => {
    window.location.href = "/requestCall";
    toast.success("Our Team Contact You As Soon As Possible Thank You!", {
      position: "top-center",
    });
  };
  return (
    <div>
      <Container className="contact_second_main">
        <div
          className="border_contact"
          style={{
            height: "43.5vh",
            display: "flex",
            alignContent: "center",
          }}
        >
          <form
            action="https://formsubmit.co/bilalmehfooz253@gmail.com"
            onSubmit={handleSubmit}
            method="POST"
            // class=" p-4 p-md-5 contact-form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              href="#footer"
              value="http://localhost:3000"
            />
            <Grid container className="contact_second_form" spacing={3}>
              <Grid item lg={12}>
                <h5 className="message_contact">Drop Your Message Here</h5>
              </Grid>
              <Grid item lg={4}>
                <p>Name</p>
                <br></br>
                <input type="name" name="Name" required autoComplete="off" />
              </Grid>
              <Grid item lg={4}>
                <p>Contact No</p>
                <br></br>
                <input type="text" name="Number" required autoComplete="off" />
              </Grid>
              <Grid item lg={4}>
                <p>Email</p>
                <br></br>
                <input type="email" name="Email" required autoComplete="off" />
              </Grid>
              <Grid item lg={8}>
                <p>Message</p>
                <br></br>
                <br></br>
                <textarea
                  className="text_contact_second"
                  type="message"
                  name="Message"
                  required
                  autoComplete="off"
                />
              </Grid>
              <Grid item lg={1}>
                <br></br>
                <button
                  style={{
                    background: "rgb(0,134,173)",
                    color: "white",
                    padding: "4% 20%",
                    border: "none",
                  }}
                  type="submit"
                >
                  Submit
                </button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contacts;
