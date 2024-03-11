import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import img1 from "../../../Image/empireBanner.png";
import "./index.css";

const Inventing = () => {
  const navigate = useNavigate();
  return (
    <div className="bg_we_zax" id="home">
      <Container>
        <Grid container>
          <Grid item lg={7} md={7} sm={7.5} xs={12} className="we_zax_heading">
            <h4>EMPIRE STATE TECH SOLUTION (ESTS)</h4>
            <p>
              ESTS Tech Academy is a US-Based Startup empowering IT
              Professionals for a Better Future. ESTS aims to help the students
              succeed by providing innovative learning programs,
              apprenticeships, and career coaching that cater to the industry's
              most in-demand diverse roles with personalized academic rigor,
              coaching and great flexibility.
            </p>
            {/* <Button  style={{textAlign:'start',display:'block',backgroundColor:'rgb(0,163,255)',color:'white',marginBottom:'20px'}} >Request A Quote</Button> */}
          </Grid>
          <Grid item lg={5} md={5} sm={4.5} xs={12} className="inventing_img">
            <img src={img1} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Inventing;
