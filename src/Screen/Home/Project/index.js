import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import img7 from "../../../Image/img14.jpg";
import img15 from "../../../Image/img15.jpg";
import img16 from "../../../Image/img16.jpg";
import img17 from "../../../Image/img17.jpg";
import img18 from "../../../Image/img18.jpg";
import img19 from "../../../Image/img19.jpg";
import Button from "@mui/material/Button";

import "./index.css";

const Project = () => {
  return (
    <div style={{ backgroundColor: "black" }} id='project'> 
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          fontFamily: "Times New Roman, Times, serif",
          marginBottom: "50px",
        }}
      >
        Some Of Our Project
      </h1>

      <Grid container className="project_main">
        <Grid item lg={3.5} md={3.5} sm={5.5} xs={12} style={{ marginBottom: "20px" }}>
          <div className="container">
            <img src={img7} />
            <div className="text-block">
              <p style={{ paddingTop: "20px", marginBottom: "2px" }}>
                Bussiness Informative Website
              </p>
              <h4>Digi Tech</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3.5} md={3.5} sm={5.5} xs={12}>
          <div className="container">
            <img src={img15} />
            <div className="text-block">
              <p style={{ paddingTop: "20px", marginBottom: "2px" }}>
                Bussiness Informative Website
              </p>
              <h4>Plumbing Service</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3.5} md={3.5} sm={5.5} xs={12}>
          <div className="container">
            <img src={img16} />
            <div className="text-block">
              <p style={{ paddingTop: "20px", marginBottom: "2px" }}>
                Bussiness Informative Website
              </p>
              <h4>Seeds PVT LTD</h4>
            </div>
          </div>
        </Grid>

        <Grid item lg={3.5} md={3.5} sm={5.5} xs={12}>
          <div className="container">
            <img src={img17} />
            <div className="text-block">
              <p style={{ paddingTop: "20px", marginBottom: "2px" }}>
                Bussiness Informative Website
              </p>
              <h4>Constructions</h4>
            </div>
          </div>
        </Grid>

        <Grid item lg={3.5} md={3.5} sm={5.5} xs={12}>
          <div className="container">
            <img src={img18} />
            <div className="text-block">
              <p style={{ paddingTop: "20px", marginBottom: "2px" }}>
                Bussiness Informative Website
              </p>
              <h4>SSAL Web</h4>
            </div>
          </div>
        </Grid>

        <Grid item lg={3.5} md={3.5} sm={5.5} xs={12} style={{ marginBottom: "50px" }}>
          <div className="container">
            <img src={img19} />
            <div className="text-block">
              <p style={{ paddingTop: "20px", marginBottom: "2px" }}>
                Bussiness Informative Website
              </p>
              <h4>Company Oreinted</h4>
            </div>
          </div>
        </Grid>
      </Grid>

      <h2
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          fontFamily: "Times New Roman, Times, serif",
          paddingBottom: "50px",
        }}
      >
        For More Design Please Contact Our Support Team
      </h2>
      <Container>
        <Grid container style={{justifyContent:'center'}}>
          <Grid item lg={2}>
            <Button
              style={{
                textAlign: "start",
                display: "block",
                backgroundColor: "rgb(0,163,255)",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Call Now +934723984
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Project;
