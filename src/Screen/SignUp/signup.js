import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useState } from "react";
import Footer from "../../Component/Footer";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./signup.css";
import { toast } from "react-toastify";
import { Button, InputLabel } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("submitFrom", window.location.href);

    try {
      const response = await fetch(
        "https://formsubmit.co/empirestatetechsolutions@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setLoading(false);
        e.target.reset(); // Reset the form after successful submission
        setSelectedData("");

        // Redirect to thank you page
        window.location.href = "https://empirestatewebsite.vercel.app/thank";
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    setSelectedData(e.target.value);
  };
  return (
    <div>
      <div className="register_contact_main">
        <Container
          className="signup_main"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <form
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
            <Grid
              container
              maxWidth="sm"
              rowSpacing={1}
              className="signup_text"
            >
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="register_input"
              >
                <h4>Register Now</h4>
              </Grid>
              <Grid item lg={12} xs={12} className="register_input_filed">
                <p>Name</p>
                <input type="name" name="Name" required autoComplete="off" />
              </Grid>
              <Grid item lg={12} xs={12} className="register_input_filed">
                <p>Email</p>
                <input type="email" name="Email" required autoComplete="off" />
              </Grid>
              <Grid item lg={12} xs={12} className="register_input_filed">
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
              <Grid item lg={12} xs={12} className="register_input_filed">
                <p>Courses</p>
                <Select
                  value={selectedData}
                  onChange={handleChange}
                  name="Select Course"
                  style={{
                    width: "100%",
                    textAlign: "start",
                    height: "5vh",
                    border: "2px solid rgb(0,134,173)",
                    outline: "none", // Remove this line
                    textDecoration: "none",
                  }}
                  displayEmpty
                  required
                  inputProps={{ "aria-label": "Select Email" }}
                >
                  {/* <InputLabel disabled hidden style={{ textAlign: "start" }}>
                    Select Course
                  </InputLabel> */}
                  <MenuItem className="hover_couse_time" value="scrum">
                    Scrum
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item lg={12} xs={12} className="register_input_filed">
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
                lg={12}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div className="signup_btn">
                  <button id="contact_btn_home_page" type="submit">
                    {loading ? (
                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          // padding: "2% 4%",
                          height: "4.5vh",
                        }}
                      >
                        <CircularProgress
                          sx={{ color: "white", height: "10px", width: "100%" }}
                        />
                      </Box>
                    ) : (
                      "Register Now"
                    )}
                  </button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Container>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default SignUp;
