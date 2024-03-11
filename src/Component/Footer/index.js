import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import letter from "../../Image/icon/letter.png";
import linkedin from "../../Image/icon/linkedin.png";
import twitter from "../../Image/icon/twitter.png";
import insta from "../../Image/icon/insta.png";
import facebook from "../../Image/icon/facebook.png";
import logo from "../../Image/empire-state-new-logo-2.png";
import "./index.css";

const Footer = () => {
  const naviagte = useNavigate();
  return (
    <div className="footer_bg_color">
      <Container>
        <Grid container className="footer_main" columnSpacing={3}>
          <Grid item lg={3} md={2.5} sm={5} xs={12} className="footer_services">
            <img src={logo} className="footer_logo" />

            <p style={{ marginTop: "6%" }}>
              Online classes with flexible timing to learn for career growth.
            </p>
          </Grid>

          <Grid item lg={2} md={2.5} sm={5} xs={12} className="footer_services">
            <h4>Services</h4>
            <p>Skilled Trainers</p>
            <p>Live & Interactive</p>
            <p>Convenient & Remote</p>
          </Grid>
          <Grid
            item
            lg={2.5}
            md={2.5}
            sm={5}
            xs={12}
            style={{ cursor: "pointer" }}
            className="footer_services"
          >
            <h4>Important Link</h4>
            <p>Home</p>
            <p onClick={() => naviagte("/aboutus")}>About</p>
            <p onClick={() => naviagte("/courses")}>Courses</p>
            <p onClick={() => naviagte("/contact")}>Contact Us</p>
          </Grid>
          <Grid
            item
            lg={2.5}
            md={3.5}
            sm={5}
            xs={12}
            className="footer_services"
          >
            <h4>Contact Us</h4>
            <Grid container>
              <Grid item lg={2} xs={1}>
                <EmailIcon />
              </Grid>
              <Grid item lg={10} xs={9}>
                <p>empirestatetecksolutions@gmail.com</p>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={2} xs={1}>
                <AddIcCallIcon />
              </Grid>
              <Grid item lg={10} xs={11}>
                <p>+1(347)593-5383</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
