import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import Footer from "../../Component/Footer";
import "./index.css";
const Contacts = () => {
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
    <div style={{ height: "80vh", display: "flex", alignItems: "center" }}>
      <Container
        className="signup_main"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          action="https://formsubmit.co/EmpireStateTechSolutions@gmail.com
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
          <Grid container maxWidth="sm" spacing={2} className="signup_text">
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
            <Grid item lg={12} className="register_input_filed">
              <p>Name</p>
              <input type="name" name="Name" required autoComplete="off" />
            </Grid>
            <br></br>
            <br></br>
            <Grid item lg={12} className="register_input_filed">
              <p>Email</p>
              <input type="email" name="Email" required autoComplete="off" />
            </Grid>
            <br></br>
            <br></br>
            <Grid item lg={12} className="register_input_filed">
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
            <Grid item lg={12} className="register_input_filed">
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
              </div>
            </Grid>
          </Grid>
        </form>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default Contacts;
