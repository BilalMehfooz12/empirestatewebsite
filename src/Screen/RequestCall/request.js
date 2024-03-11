import Grid from "@mui/material/Grid";
import { Button, Container, InputLabel, MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import InputMask from "react-input-mask";
import Box from "@mui/material/Box";
import requestOne from "../../Image/Requestacallone.jpg";
import requestTwo from "../../Image/Requestacalltwo.jpg";

import "./request.css";
const RequestCall = () => {
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
      <div
        style={{
          height: "auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "1%",
        }}
      >
        {/* <Container
          className="signup_main"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <form
            onSubmit={handleSubmit}
            method="POST"
            // class=" p-4 p-md-5 contact-form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" href="#footer" />
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
                <h4>Request a Call Back</h4>
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="register_input_filed"
              >
                <p>Name</p>
                <input type="name" name="Name" required autoComplete="off" />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="register_input_filed"
              >
                <p>Email</p>
                <input type="email" name="Email" required autoComplete="off" />
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
                <input
                  type="text"
                  name="Phone Number"
                  required
                  autoComplete="off"
                />
              </Grid>
              <br></br>
              <br></br>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="register_input_filed"
              >
                <p>Preferred Time</p>
                <Select
                  value={selectedData}
                  onChange={handleChange}
                  name="Selected Time"
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
                  <MenuItem value="" disabled hidden>
                    Select
                  </MenuItem>
                  <MenuItem value="Morning" className="hover_couse_time">
                    Morning
                  </MenuItem>
                  <MenuItem value="After Noon" className="hover_couse_time">
                    After Noon
                  </MenuItem>
                  <MenuItem value="Evening" className="hover_couse_time">
                    Evening
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
                />
              </Grid>
              <br></br> <br></br>
              <br></br>
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
                    width: "40%",
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
                          sx={{ color: "white", height: "10px", width: "100%" }}
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
        </Container> */}
        <Container>
          <Grid container columnSpacing={1} style={{ display: "flex" }}>
            <Grid item lg={3.5} style={{ flex: "1" }}>
              <img
                src={requestOne}
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
                    <h4>Schedule A Call Back</h4>
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
                    <p>Preferred Time</p>
                    <Select
                      value={selectedData}
                      onChange={handleChange}
                      name="Selected Time"
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
                      <MenuItem value="" disabled hidden>
                        Select
                      </MenuItem>
                      <MenuItem value="Morning" className="hover_couse_time">
                        Morning
                      </MenuItem>
                      <MenuItem value="After Noon" className="hover_couse_time">
                        After Noon
                      </MenuItem>
                      <MenuItem value="Evening" className="hover_couse_time">
                        Evening
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
                        width: "60%",
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
                src={requestTwo}
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

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default RequestCall;
