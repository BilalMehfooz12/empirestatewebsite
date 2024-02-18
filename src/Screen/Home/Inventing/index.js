import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import img1 from "../../../Image/userbgImage.png";
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy
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
