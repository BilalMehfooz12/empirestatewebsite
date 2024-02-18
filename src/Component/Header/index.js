import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../../Image/Empirelogo.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink, HashLink as link } from "react-router-hash-link";
import "./index.css";
const Header = () => {
  return (
    <BrowserRouter>
      <div className="header_sticky">
        <div class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <img src={logo} className="logo_img" />
            <a class="navbar-brand" href="#"></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <Container>
                <Grid container className="main_headers">
                  <Grid item xl={1.5} lg={1.5} md={2.5} sm={3}>
                    <Button className="login_btn">Register Now</Button>
                  </Grid>
                  <Grid item lg={1.8} md={3} sm={3} xs={12}>
                    <Grid container>
                      <Grid item xl={1} lg={2} md={2.5}>
                        <AddIcCallIcon style={{ color: "white" }} />
                      </Grid>
                      <Grid item xl={10} lg={10}>
                        <p
                          style={{
                            width: "100%",
                            color: "white",
                            font: "bolder ",
                          }}
                        >
                          <b>+1(347)593-5383</b>
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item lg={3.5} md={6} sm={6} xs={12}>
                    <Grid container>
                      <Grid item xl={1} lg={1.5} md={2.5} sm={1.5}>
                        <EmailIcon style={{ color: "white" }} />
                      </Grid>
                      <Grid item xl={10} lg={10}>
                        <p
                          style={{
                            color: "white",
                          }}
                        >
                          <b> empirestatetecksolution@gmail.com</b>
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item lg={1} sm={0.2}></Grid>
                  <Grid item lg={1} md={2} sm={1.2} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <a
                        href="#why_bgvt"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <b>Home</b>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={0.5} md={2} sm={1.8} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <a
                        href="#bit_game"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <HashLink
                          to="#services"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <b>About</b>
                        </HashLink>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={1} md={2} sm={1.4} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <a
                        href="#benifts"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <HashLink
                          to="#project"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <b>Courses</b>
                        </HashLink>
                      </a>
                    </p>
                  </Grid>

                  <Grid item lg={1} md={2} sm={2} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <a
                        href="#benifts"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <HashLink
                          to="#project"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <b>Contact Us</b>
                        </HashLink>
                      </a>
                    </p>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Header;
