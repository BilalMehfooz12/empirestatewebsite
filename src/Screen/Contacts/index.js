import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import Footer from "../../Component/Footer";
import InputMask from "react-input-mask";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./index.css";
const containerStyle = {
  display: "flex",
};

const itemStyle = {
  flex: 1,
};

const Contacts = () => {
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
    <div className="contact_us_height">
      <Container>
        <Grid container columnSpacing={1} style={{ display: "flex" }}>
          <Grid item lg={3.5} style={{ flex: "1" }}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/007/067/602/small/businessman-shows-outstretched-hand-with-social-icon-on-virtual-screen-contact-us-free-photo.jpg"
              style={{
                width: "100%",
                height: "99%",
                objectFit: "cover",
                marginTop: "3%",
              }}
            />
          </Grid>
          <Grid item lg={6} style={{ flex: "1" }}>
            <form onSubmit={handleSubmit} method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" href="#footer" />
              <Grid container rowSpacing={2} className="signup_text">
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  className="register_input"
                >
                  <h4>Drop Your Message Here</h4>
                </Grid>
                <Grid item lg={12} xs={12} className="register_input_filed">
                  <p>Name</p>
                  <input
                    type="name"
                    name="Name"
                    required
                    autoComplete="off"
                    maxLength={20}
                  />
                </Grid>

                <Grid item lg={12} xs={12} className="register_input_filed">
                  <p>Email</p>
                  <input
                    type="email"
                    name="Email"
                    required
                    autoComplete="off"
                    maxLength={20}
                  />
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  className="register_input_filed"
                >
                  <p>Phone Number</p>
                  <InputMask
                    mask="999-999-999"
                    alwaysShowMask
                    maskChar="_"
                    type="text"
                    name="Name"
                    required
                    autoComplete="off"
                  />
                </Grid>
                <Grid item lg={12} xs={12} className="register_input_filed">
                  <p>Courses</p>
                  <Select
                    value={selectedData}
                    onChange={handleChange}
                    name="Course"
                    displayEmpty
                    required
                    inputProps={{ "aria-label": "Select Email" }}
                    style={{
                      width: "100%",
                      textAlign: "start",
                      height: "5vh",
                      border: "2px solid rgb(0,134,173)",
                      outline: "none", // Remove this line
                      textDecoration: "none",
                    }}
                  >
                    <MenuItem value="" disabled hidden>
                      Select Course
                    </MenuItem>
                    <MenuItem className="hover_couse_time" value="Scrum Master">
                      Scrum Master
                    </MenuItem>
                    <MenuItem className="hover_couse_time" value="Scrum Master">
                      SQA
                    </MenuItem>
                    <MenuItem className="hover_couse_time" value="Scrum Master">
                      DevOps
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  className="register_input_filed"
                >
                  <p>Message</p>
                  <textarea
                    type="text"
                    className="register_input_text_area"
                    name="Message"
                    required
                    autoComplete="off"
                    maxLength={500}
                    rows={6} // Set the number of visible rows
                    cols={50}
                    style={{ height: "150px", resize: "none" }}
                  />
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "20%",
                    }}
                  >
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
                            sx={{
                              color: "white",
                              height: "10px",
                              width: "100%",
                            }}
                          />
                        </Box>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item lg={3.5} style={{ flex: "1" }}>
            <img
              src="https://t3.ftcdn.net/jpg/03/31/67/20/360_F_331672033_FxaxFTRS6kSWvPlNEk2DFgu6PIRikKOq.jpg"
              style={{
                width: "100%",
                height: "99%",
                objectFit: "cover",
                marginTop: "3%",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      {/* <Container
        className="signup_main"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      > */}

      {/* </Container> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Contacts;
