import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import webinarOne from "../../../Image/webinarone (1).png";
import webinarTwo from "../../../Image/webinartwo.png";
import webinarThree from "../../../Image/webinarthree.png";
import webinarFour from "../../../Image/services.png";

import "./index.css";

const WebsitePrice = () => {
  return (
    <div className="webinar_bg">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid container maxWidth="lg" className="webinar_main">
          <Grid item lg={11} xs={12} className="webinar_text">
            <h4>Webinars</h4>
            <p>
              {" "}
              We have a variety of webinars lined up for you. Check them out
              here.
            </p>
          </Grid>
          <Grid item lg={1} xs={12}>
            <Button
              style={{ backgroundColor: "white", color: "rgb(0,134,174)" }}
            >
              View All
            </Button>
          </Grid>
        </Grid>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          maxWidth="lg"
          columnSpacing={1}
          className="website_price_main"
        >
          {/* <Grid item lg={0}></Grid> */}
          <Grid
            item
            lg={3}
            md={3.5}
            sm={5.5}
            xs={11}
            className="wesbsite_price_child"
          >
            <img src={webinarOne} alt="" />
            <p>Deep Dive With Azure: API Management</p>
          </Grid>
          <Grid
            item
            lg={3}
            md={3.5}
            sm={5.5}
            xs={11}
            className="wesbsite_price_child"
          >
            <img src={webinarTwo} alt="" />
            <p>Azure Cosmos DB</p>
          </Grid>

          <Grid
            item
            lg={3}
            md={3.5}
            sm={5.5}
            xs={11}
            className="wesbsite_price_child"
          >
            <img src={webinarThree} alt="" />
            <p>Advance React Js Concepts That Every Biginner Should Know</p>
          </Grid>
          <Grid
            item
            lg={3}
            md={3.5}
            sm={5.5}
            xs={11}
            className="wesbsite_price_child"
            id="webinar_bottom"
          >
            <img src={webinarFour} alt="" />
            <p>Bs2 Marketing in 2022: Optimize Your Marketing Machine</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default WebsitePrice;
