import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useLocation } from "react-router-dom";
import logo from "../../Image/Empirelogo.png";

import { BrowserRouter } from "react-router-dom";
import { HashLink, HashLink as link } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  const location = useLocation();
  return (
    <div className="header_sticky">
      <div class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          {/* <img src={logo} className="logo_img" /> */}
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
              <Grid container className="main_headers" spacing={1}>
                <Grid item lg={1} sm={0.2}>
                  <img src={logo} className="logo_img" />
                </Grid>

                <Grid item xl={1.5} lg={1.5} md={2.5} sm={3}>
                  <Button className="login_btn">Register Now</Button>
                </Grid>
                <Grid item lg={1.8} md={3} sm={3} xs={12}>
                  <Grid container>
                    <Grid item xl={1} lg={2} md={2.5}>
                      <CallIcon style={{ color: "white" }} />
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
                <Grid item lg={1} md={2} sm={1.2} xs={12}>
                  <p>
                    <Link
                      to="/"
                      className="header_text_resp_one"
                      id="header_text_resp"
                      style={{
                        backgroundColor:
                          location.pathname === "/" ? "white" : "",
                        color:
                          location.pathname === "/"
                            ? "rgb(0,134,173)"
                            : "white",
                      }}
                    >
                      Home
                    </Link>
                  </p>
                </Grid>
                <Grid item lg={1} md={2} sm={1.8} xs={12}>
                  <p>
                    <Link
                      to="/aboutus"
                      className="header_text_resp_one"
                      id="header_text_resp"
                      style={{
                        backgroundColor:
                          location.pathname === "/aboutus" ? "white" : "",
                        color:
                          location.pathname === "/aboutus"
                            ? "rgb(0,134,173)"
                            : "white",
                      }}
                    >
                      About
                    </Link>
                  </p>
                </Grid>
                <Grid item lg={1} md={2} sm={1.4} xs={12}>
                  <p>
                    <Link
                      to="/courses"
                      className="header_text_resp_one"
                      id="header_text_resp"
                      style={{
                        backgroundColor:
                          location.pathname === "/courses" ? "white" : "",
                        color:
                          location.pathname === "/courses"
                            ? "rgb(0,134,173)"
                            : "white",
                      }}
                    >
                      Courses
                    </Link>
                  </p>
                </Grid>

                <Grid item lg={1.2} md={2} sm={2} xs={12}>
                  <p>
                    <Link
                      to="/contact"
                      className="header_text_resp_one"
                      id="header_text_resp"
                      style={{
                        backgroundColor:
                          location.pathname === "/contact" ? "white" : "",
                        color:
                          location.pathname === "/contact"
                            ? "rgb(0,134,173)"
                            : "white",
                      }}
                    >
                      Contact Us
                    </Link>
                  </p>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
