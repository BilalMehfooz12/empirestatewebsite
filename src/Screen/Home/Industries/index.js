import Grid from "@mui/material/Grid";
import img20 from "../../../Image/IT.png";
import img21 from '../../../Image/img21.png' 
import img22 from '../../../Image/img22.png' 
import img23 from '../../../Image/img23.png' 
import img24 from '../../../Image/img24.png' 
import img25 from '../../../Image/img25.png' 
import "./index.css";

const Industries = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          fontFamily: "Times New Roman, Times, serif",
          marginBottom: "50px",
        }}
      >
      Proven Success In Several Industries
      </h1>

      <Grid container className="industries_main">
        <Grid item lg={1} md={0.7} sm={1.5} xs={1.5} className="industries_img">
          <img src={img20} alt="it" />
          <p className="it_text_mult">
            <b>IT</b>
          </p>
        </Grid>
        <Grid item lg={1} md={0.7} sm={1.5} xs={1.5} className="industries_img">
          <img src={img21} alt="" />
          <p>
            <b>EDUCATION</b>
          </p>
        </Grid>
        <Grid item lg={1} md={0.7} sm={1.5} xs={2} className="industries_img1">
     

          <img src={img24} alt="" />
          <p>
            <b>MEDICAL</b>
          </p>
        </Grid>
        <Grid item lg={1} md={0.7} sm={1.5} xs={1.5} className="industries_img">
          <img src={img23} alt="" />
          <p>
            <b>
Restaurant</b>
          </p>
        </Grid>
        <Grid item lg={1} md={0.7} sm={1.5} xs={1.5} className="industries_img">
        <img src={img22} alt="" />
          <p>
            <b>TRANSPORAION</b>
          </p>
        </Grid>
        <Grid item lg={1} md={0.7} sm={1.5} xs={1.5} className="industries_img">
          <img src={img25} alt="" id='estate_icon'/>
          <p>
            <b>Estate</b>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Industries;
