import Grid from "@mui/material/Grid";
import { Button, Container, InputLabel, MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import Footer from "../../Component/Footer";
import "./request.css";
import { toast } from "react-toastify";
const RequestCall = () => {
  const handleSubmit = async (event) => {
    window.location.href = "/requestCall";
    toast.success("Our Team Contact You As Soon As Possible Thank You!", {
      position: "top-center",
    });
  };
  return (
    <div>
      <Container>
        <h2 className="request_heading"> Request a Call Back</h2>
        <Grid container className="request_main">
          <Grid item lg={7} className="contact_second_request">
            <form
              action="https://formsubmit.co/bilalmehfooz253@gmail.com"
              onSubmit={handleSubmit}
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
              <p>Name</p>
              <input type="name" name="Name" required autoComplete="off" />
              <br></br>
              <br></br>
              <p>Email</p>
              <input type="name" name="Email" required autoComplete="off" />
              <br></br>
              <br></br>
              <p>Phone Number</p>
              <input
                type="text"
                name="Phone Number"
                required
                autoComplete="off"
              />
              <br></br>
              <br></br>
              <p>Preferred Time</p>
              <textarea
                className="text_contact_request"
                type="name"
                name="Prefer Time"
                required
                autoComplete="off"
              />
              <br></br>
              <br></br>
              <p>Message</p>
              <textarea
                className="text_contact_request"
                type="name"
                name="Message"
                required
                autoComplete="off"
              />
              <br></br>
              <br></br>
              <button
                style={{
                  background: "rgb(0,134,173)",
                  color: "white",
                  padding: "2% 10%",
                  border: "none",
                }}
                type="submit"
              >
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

export default RequestCall;
