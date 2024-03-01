import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../Image/empirelogo5-removebg-preview.png";

import { BrowserRouter } from "react-router-dom";
import { HashLink, HashLink as link } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="header_sticky" style={{ height: "14vh" }}>
      <div class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          {/* <img
            src={logo}
            className="logo_img"
    
          /> */}
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
            <Container className="header_child_bg">
              <Grid container className="main_headers" gap={2}>
                <Grid item lg={2} md={2} sm={2} xs={12}>
                  <img src={logo} className="logo_img" />
                </Grid>
                {/* 
                <Grid item xl={1.5} lg={1.5} md={2.5} sm={3}>
                  <Button className="login_btn">Register Now</Button>
                </Grid> */}
                {/* <Grid item lg={1.8} md={3} sm={3} xs={12}>
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
                        <b> empirestatetecksolutions@gmail.com</b>
                      </p>
                    </Grid>
                  </Grid>
                </Grid> */}

                <Grid
                  item
                  lg={1}
                  md={1}
                  sm={1}
                  xs={12}
                  style={{
                    backgroundColor:
                      location.pathname === "/" ? "rgb(4, 38, 48)" : "white",
                  }}
                >
                  <p className="centered-text">
                    <Link
                      to="/"
                      className="header_text_resp_one"
                      id="header_text_resp"
                      style={{
                        color:
                          location.pathname === "/"
                            ? "white"
                            : "rgb(0,134,173)",
                      }}
                    >
                      Home
                    </Link>
                  </p>
                </Grid>
                <Grid
                  item
                  lg={1}
                  md={1}
                  sm={1}
                  xs={12}
                  style={{
                    backgroundColor:
                      location.pathname === "/aboutus"
                        ? "rgb(4, 38, 48)"
                        : "white",
                  }}
                >
                  <p className="centered-text">
                    <Link
                      to="/aboutus"
                      className="header_text_resp_one"
                      id="header_text_resp"
                      style={{
                        color:
                          location.pathname === "/aboutus"
                            ? "white"
                            : "rgb(0,134,173)",
                      }}
                    >
                      About
                    </Link>
                  </p>
                </Grid>
                <Grid
                  item
                  lg={1}
                  md={1}
                  sm={1}
                  xs={12}
                  style={{
                    backgroundColor:
                      location.pathname === "/courses"
                        ? "rgb(4, 38, 48)"
                        : "white",
                  }}
                >
                  <p className="centered-text">
                    <Link
                      to="/courses"
                      className="header_text_resp_one"
                      id="header_text_resp"
                      style={{
                        color:
                          location.pathname === "/courses"
                            ? "white"
                            : "rgb(0,134,173)",
                      }}
                    >
                      Courses
                    </Link>
                  </p>
                </Grid>

                <Grid
                  item
                  lg={1.2}
                  md={1.2}
                  sm={1.5}
                  xs={12}
                  style={{
                    backgroundColor:
                      location.pathname === "/contact"
                        ? "rgb(4, 38, 48)"
                        : "white",
                  }}
                >
                  <p className="centered-text">
                    <Link
                      to="/contact"
                      className="header_text_resp_one"
                      id="header_text_resp"
                      style={{
                        color:
                          location.pathname === "/contact"
                            ? "white"
                            : "rgb(0,134,173)",
                      }}
                    >
                      Contact Us
                    </Link>
                  </p>
                </Grid>
                <Grid item lg={3.2} md={4} sm={5.5} xs={12}>
                  <Grid
                    container
                    style={{ display: "flex", alignItems: "center" }}
                    spacing={2}
                  >
                    <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                      <CallIcon style={{ color: "rgb(0,134,173)" }} />
                      <br></br>
                      <EmailIcon style={{ color: "rgb(0,134,173)" }} />
                    </Grid>
                    <Grid
                      item
                      xl={10}
                      lg={10}
                      md={10}
                      sm={10}
                      xs={10}
                      className="centered-text"
                    >
                      +1(347)593-5383<br></br>{" "}
                      empirestatetecksolutions@gmail.com
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xl={1.6} lg={1.6} md={2} sm={3} xs={12}>
                  <Button
                    className="login_btn"
                    onClick={() => navigate("/signUp")}
                  >
                    Register Now
                  </Button>
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
