import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Footer from "../../Component/Footer";
import "./signup.css";
import { Button } from "@mui/material";
const SignUp = () => {
  return (
    <div>
      <Container
        className="signup_main"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid container maxWidth="sm" className="signup_text">
          <Grid item lg={12} md={12} sm={12} xs={12} className="register_input">
            <h4>Register Now</h4>
            <p>Name</p>
            <br></br>
            <input type="name" name="Name" required autoComplete="off" />
            <br></br>
            <br></br>
            <p>Email</p>
            <br></br>
            <input type="email" name="Email" required autoComplete="off" />
            <br></br>
            <br></br>
            <p>Phone Number</p>
            <br></br>
            <input
              type="text"
              name="Phone Number"
              required
              autoComplete="off"
            />
            <br></br>
            <br></br>
            <p>Course</p>
            <br></br>
            <textarea type="text" name="Course" required autoComplete="off" />
            <br></br>
            <br></br>
            <p>Message</p>
            <br></br>
            <textarea type="text" name="Message" required autoComplete="off" />
            <br></br> <br></br>
            <Button
              style={{ backgroundColor: "rgb(0,134,173)", color: "white" }}
            >
              Register Now
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default SignUp;
