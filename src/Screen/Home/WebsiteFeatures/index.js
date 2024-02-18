import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";
import { Button } from "@mui/material";
import img2 from "../../../Image/services.png";
import serviceOne from "../../../Image/service1.png";
import serviceTwo from "../../../Image/service2.png";
import serviceThree from "../../../Image/service3.png";

const WebsiteFeatures = () => {
  return (
    <div>
      <div className="service_main" id="services">
        <Grid container maxWidth="md" className="website_feature_main">
          <Grid
            item
            lg={3.5}
            md={3.5}
            sm={5}
            xs={11}
            className="wesbsite_feature_child"
          >
            <img src={serviceOne} alt="" />
            <h4 className="heading_services">Skilled Trainers</h4>
            <p>
              Learn from experienced industry professionals who provide hands-on
              knowledge with real-life applications.
            </p>
          </Grid>
          <Grid
            item
            lg={3.5}
            md={3.5}
            sm={5}
            xs={11}
            className="wesbsite_feature_child"
          >
            <img src={serviceTwo} alt="" />
            <h4 className="heading_services">Live & Interactive</h4>
            <p>
              Communicate and engage with your trainer and other students for a
              collaborative learning experience
            </p>
          </Grid>
          <Grid
            item
            lg={3.5}
            md={3.5}
            sm={5}
            xs={11}
            className="wesbsite_feature_child"
          >
            <img src={serviceThree} alt="" />
            <h4 className="heading_services">Convenient & Remote</h4>
            <p>
              Recorded sessions for learning at your own pace. Safe and easy
              access to all trainings and webinars.
            </p>
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        style={{ display: "flex", justifyContent: "center" }}
        className="course_main"
      >
        <Grid item lg={8}>
          <h3>Courses</h3>
          <p>
            {" "}
            Our company offers responsive design services that assure your
            website will adjust to presence.
          </p>
        </Grid>
        <Grid item lg={2}>
          <Button style={{ backgroundColor: "rgb(0,134,174)", color: "white" }}>
            View All
          </Button>
        </Grid>
      </Grid>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid container maxWidth="lg">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <img src={img2} alt="Image 1" />
                <img src={img2} alt="Image 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img2} alt="Image 1" />
                <img src={img2} alt="Image 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img2} alt="Image 1" />
                <img src={img2} alt="Image 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img2} alt="Image 1" />
                <img src={img2} alt="Image 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img2} alt="Image 1" />
                <img src={img2} alt="Image 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img2} alt="Image 1" />
                <img src={img2} alt="Image 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img2} alt="Image 1" />
                <img src={img2} alt="Image 2" />
              </div>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </div>
    </div>
  );
};

export default WebsiteFeatures;
