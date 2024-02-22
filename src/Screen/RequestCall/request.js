import Grid from "@mui/material/Grid";
import { Button, Container, InputLabel, MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import "./request.css";
const RequestCall = () => {
  return (
    <div>
      <div className="bg_image">
        <h1>Request A Call Back</h1>
      </div>
      <Container>
        <h2 className="request_heading"> Request a Call Back</h2>

        <Grid
          container
          //   maxWidth="md"
          className="request_main"
        >
          <Grid item lg={7} className="contact_second_request">
            <p>Name</p>
            <input type="name" name="Name" required autoComplete="off" />
            <br></br>
            <br></br>
            <p>Email</p>
            <input type="name" name="Name" required autoComplete="off" />
            <br></br>
            <br></br>
            <p>Password</p>
            <input type="password" name="Name" required autoComplete="off" />
            <br></br>
            <br></br>
            <p>Preferred Time</p>

            <Select className="select_box_request" displayEmpty>
              <MenuItem value="" selected disabled hidden>
                Please Select
              </MenuItem>

              <MenuItem>Morning</MenuItem>
              <MenuItem>Evening</MenuItem>
              {/* <MenuItem>Morning</MenuItem> */}
            </Select>
            <br></br>
            <br></br>
            <p>Message</p>
            <textarea
              className="text_contact_request"
              type="name"
              name="Name"
              required
              autoComplete="off"
            />
            <br></br>
            <br></br>
            <Button
              style={{
                background: "rgb(0,134,173)",
                color: "white",
                padding: "2% 10%",
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RequestCall;
