import Grid from "@mui/material/Grid";
import { Button, Container, InputLabel, MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import Footer from "../../Component/Footer";
import "./request.css";
import { toast } from "react-toastify";
const RequestCall = () => {
  const handleSubmit = async (event) => {
    window.location.href = "/requestCall";
    // toast.success("Our Team Contact You As Soon As Possible Thank You!", {
    //   position: "top-center",
    // });
  };
  return (
    <div>
      <Container
        className="signup_main"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form
          action="https://formsubmit.co/empirestatetecksolutions@gmail.com
          "
          onSubmit={handleSubmit}
          method="POST"
          // class=" p-4 p-md-5 contact-form"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            href="#footer"
            value="https://empirestatewebsite.vercel.app/thank"
          />

          <Grid container maxWidth="lg" spacing={2} className="signup_text">
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="register_input"
            >
              <h4>Request a Call Back</h4>
            </Grid>
            <Grid item lg={4} className="register_input_filed">
              <p>Name</p>
              <input type="name" name="Name" required autoComplete="off" />
            </Grid>
            <br></br>
            <br></br>
            <Grid item lg={4} className="register_input_filed">
              <p>Email</p>
              <input type="email" name="Email" required autoComplete="off" />
            </Grid>
            <br></br>
            <br></br>
            <Grid item lg={4} className="register_input_filed">
              <p>Phone Number</p>
              <input
                type="text"
                name="Phone Number"
                required
                autoComplete="off"
              />
            </Grid>
            <br></br>
            <br></br>
            <Grid item lg={4} className="register_input_filed">
              <p>Preferred Time</p>
              <input
                type="text"
                // className="register_input_text_area"
                name="Preferred Time"
                required
                autoComplete="off"
              />
            </Grid>
            <br></br>
            <br></br>
            <Grid item lg={6} className="register_input_filed">
              <p>Message</p>
              <textarea
                type="text"
                className="register_input_text_area"
                name="Message"
                required
                autoComplete="off"
              />
            </Grid>
            <br></br> <br></br>
            <br></br>
            <Grid
              item
              lg={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "rgb(0,134,173)",
                  color: "white",
                  padding: "10% 20%",
                  // height: "5vh",
                  border: "none",
                  marginTop: "5%",
                  width: "100%",
                }}
                type="submit"
              >
                Submit
              </button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default RequestCall;
