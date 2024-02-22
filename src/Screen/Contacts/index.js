import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "./index.css";
const Contacts = () => {
  return (
    <div>
      <Container
        className="contact_second_main"
        style={{
          height: "48vh",
          // display: "flex",
          // alignContent: "center",
          // width: "100%",
        }}
      >
        {/* <Grid container>
          <Grid item lg={2}>
            <Grid container>
              <Grid item xl={1} lg={2} md={2.5}>
                <CallIcon style={{ color: "rgb(0,134,173)" }} />
              </Grid>
              <Grid item xl={10} lg={10}>
                <p
                  style={{
                    width: "100%",
                    color: "rgb(0,134,173)  ",
                    font: "bolder ",
                  }}
                >
                  <b>+1(347)593-5383</b>
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2}>
            <Grid container>
              <Grid item xl={4} lg={1.5} md={2.5} sm={1.5}>
                <EmailIcon style={{ color: "rgb(0,134,173) " }} />
              </Grid>
              <Grid item xl={8} lg={10}>
                <p
                  style={{
                    color: "rgb(0,134,173) ",
                  }}
                >
                  <b> empirestatetecksolutions@gmail.com</b>
                </p>
              </Grid>
            </Grid>
          </Grid>{" "}
        </Grid> */}
        <div className="border_contact">
          <h4>Drop Your Message Here</h4>
          <Grid container className="contact_second_form" spacing={3}>
            <Grid item lg={4}>
              <p>Name</p>
              <br></br>
              <input type="name" name="Name" required autoComplete="off" />
            </Grid>
            <Grid item lg={4}>
              <p>Contact No</p>
              <br></br>
              <input type="name" name="Name" required autoComplete="off" />
            </Grid>
            <Grid item lg={4}>
              <p>Email</p>
              <br></br>
              <input type="name" name="Name" required autoComplete="off" />
            </Grid>
            <Grid item lg={8}>
              <p>Email</p>
              <br></br>
              <br></br>
              <textarea
                className="text_contact_second"
                type="name"
                name="Name"
                required
                autoComplete="off"
              />
            </Grid>
            <Grid item lg={2}>
              <br></br>
              <Button
                style={{
                  background: "rgb(0,134,173)",
                  color: "white",
                  padding: "4% 10%",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
