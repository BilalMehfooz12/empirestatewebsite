import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import img8 from "../../../Image/img26.png";
import img9 from "../../../Image/img27.png";
import img10 from "../../../Image/img28.png";
import "./index.css";

const GetInTouch = () => {
  return (
    <div style={{ backgroundColor: "black" }} id="course">
      <Grid container className="website_price_main">
        <Grid
          item
          lg={3.5}
          md={3.5}
          sm={5.5}
          xs={11}
          className="wesbsite_price_child"
        >
          <img src={img8} alt="" />
          <p style={{ fontSize: "19px" }}>
            <b>WEBSITE DESIGNING SERVICES</b>
          </p>
          <p
            style={{
              color: "white",
              textAlign: "center",
              paddingLeft: "45px",
              paddingRight: "45px",
            }}
          >
            Build an impressive online visibility with our customized design,
            responsive layout and great user friendly experiences. We have a
            team of skilled designers who manifest websites to show your brand's
            personality and values. Let us help you build a stunning website.
          </p>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid item lg={5.2}>
              {/* <Button
                style={{
                  textAlign: "end",
                  display: "block",
                  backgroundColor: "rgb(0,163,255)",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                Request A Quote
              </Button> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          lg={3.5}
          md={3.5}
          sm={5.5}
          xs={11}
          className="wesbsite_price_child"
        >
          <img src={img9} alt="" />
          <p style={{ fontSize: "19px" }}>
            <b>
SEO SERVICES
</b>
          </p>
          <p
            style={{
              color: "white",
              textAlign: "center",
              paddingLeft: "45px",
              paddingRight: "45px",
            }}
          >
  Improve your online presence, google search result ranking and drive targeted traffic to your website with our specialized SEO team. Our team uses cutting-edge techniques and tools to optimize your website, including keyword research, on-page optimization, link building, and more.
          </p>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid item lg={5.2}>
              {/* <Button
                style={{
                  textAlign: "end",
                  display: "block",
                  backgroundColor: "rgb(0,163,255)",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                Request A Quote
              </Button> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          lg={3.5}
          md={3.5}
          sm={5.5}
          xs={11}
          className="wesbsite_price_child"
        >
          <img src={img10} alt="" />
          <p style={{ fontSize: "19px" }}>
            <b>
PAID MARKETING SERVICES
</b>
          </p>
          <p
            style={{
              color: "white",
              textAlign: "center",
              paddingLeft: "45px",
              paddingRight: "45px",
            }}
          >
    Drive targeted traffic to your website with our effective paid marketing services.Our expert marketers use data-driven strategies to deliver results-driven paid marketing campaigns. From Google Ads to social media advertising, we help you reach your target audience and generate qualified leads for your business.
          </p>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid item lg={5.2}>
              {/* <Button
                style={{
                  textAlign: "end",
                  display: "block",
                  backgroundColor: "rgb(0,163,255)",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                Request A Quote
              </Button> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container>
        <Grid container style={{ marginTop: "40px", justifyContent: "center" }}>
          <Grid item lg={4} md={4} sm={7}>
            <p style={{ fontSize: "25px", color: "rgb(222,190,22" }}>
              <b>GET IN TOUCH</b>
            </p>
            <p style={{ color: "white", textAlign: "center" }}>
            At our company, we value our customers and are always ready to assist you. Whether you need help with an order or have a general inquiry, we're here to help. You can fill out our contact form or reach out to us directly at [insert phone number] or [insert email address]. We look forward to hearing from you!
            </p>
          </Grid>
          {/* <Grid item lg={2} md={2}></Grid>
          <Grid item lg={4} md={4} sm={7}>
            <p style={{ fontSize: "25px", color: "rgb(222,190,22" }}>
              <b>Contact Detail</b>
            </p>
            <p style={{ color: "white", textAlign: "justify" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </Grid> */}
        </Grid>
      </Container>
      {/* E-Commerce bussiness  */}
    </div>
  );
};

export default GetInTouch;
