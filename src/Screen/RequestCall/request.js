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
      <Container
        className="signup_main"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid container maxWidth="lg" spacing={2} className="signup_text">
          <Grid item lg={12} md={12} sm={12} xs={12} className="register_input">
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
            <textarea
              type="text"
              className="register_input_text_area"
              name="Course"
              required
              autoComplete="off"
            />
          </Grid>
          <br></br>
          <br></br>
          <Grid item lg={4} className="register_input_filed">
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
          <Grid item lg={4}>
            <Button
              style={{
                backgroundColor: "rgb(0,134,173)",
                color: "white",
                padding: "5% 10%",
                marginTop: "5%",
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default RequestCall;
