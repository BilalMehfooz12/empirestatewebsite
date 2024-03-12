import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import { useState } from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import contactImage from "../../../Image/contact_image_2.jpg";
import Footer from "../../../Component/Footer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./contact.css";
const ContactUs = () => {
  const naviate = useNavigate();
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="bg_contact">
      <div style={{ display: "flex", justifyContent: "end", padding: "2%" }}>
        <Button
          id="learn_now_btn"
          style={{ padding: "1% 1%" }}
          onClick={() => naviate("/requestCall")}
        >
          <b> Schedule A Call</b>
        </Button>
      </div>
      {/* <Container>
        <Grid container className="main_contact" gap={5}>
          <Grid item lg={5} xs={12} className="conatact_image">
            <img src={contactImage} />
          </Grid>
          <Grid item lg={5} md={12} sm={12} xs={12} className="contact_form">
            <form
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
              <button type="submit" id="contact_btn_home_page">
                {loading ? (
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      // padding: "2% 4%",
                      height: "4vh",
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
            </form>
          </Grid>
        </Grid>
      </Container> */}
      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
