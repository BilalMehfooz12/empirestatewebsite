import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CouserOne from "../../Image/sqaicon.jpg";
import Cousertwo from "../../Image/scrumicon.webp";
import CouserTwo from "../../Image/courseTwo.png";
import CouserThree from "../../Image/courseThree.png";
import CouserFour from "../../Image/sqateacher.jpg";
import femaleIcon from "../../Image/female.icon.png";
import "./courses.css";
import { useState } from "react";
const Courses = () => {
  const obj = [
    {
      imageRole: CouserOne,
      role: "Software Quality Assurance",
      levelCourse: "Beginner to Advance",
      name: "Jaffar Zahid",
      tecknology: "Tecnology",
      application: "IT Software",
      icon: <AccessTimeIcon />,
      image: CouserFour,
      hour: "2 Hour",
      iconLevel: <SignalCellularAltIcon />,
      level: "Beginner",
    },
    {
      imageRole: Cousertwo,

      tecknology: "React",
      role: "Scrum Master",
      levelCourse: "Beginner to Advance",
      name: "Samiya Khalid",
      tecknology: "Tecnology",
      application: "IT Software",
      icon: <AccessTimeIcon />,
      image: femaleIcon,

      hour: "2 Hour",
      iconLevel: <SignalCellularAltIcon />,
      level: "Beginner",
    },
    // {
    //   imageRole: CouserOne,
    //   tecknology: "Devops",
    //   application: "Aplication Support",
    //   icon: <AccessTimeIcon />,
    //   image:
    //     "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",
    //   hour: "2 Hour",
    //   iconLevel: <SignalCellularAltIcon />,
    //   level: "Beginner",
    // },
    // {
    //   imageRole: CouserOne,
    //   tecknology: "Scrum",
    //   application: "Aplication Support",
    //   image:
    //     "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",

    //   icon: <AccessTimeIcon />,
    //   hour: "2 Hour",
    //   iconLevel: <SignalCellularAltIcon />,
    //   level: "Beginner",
    // },
    // {
    //   imageRole: CouserOne,
    //   tecknology: "Tecnology",
    //   application: "Aplication Support",
    //   image:
    //     "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",

    //   icon: <AccessTimeIcon />,
    //   hour: "2 Hour",
    //   iconLevel: <SignalCellularAltIcon />,
    //   level: "Beginner",
    // },
    // {
    //   imageRole: CouserOne,
    //   tecknology: "React",
    //   application: "Aplication Support",
    //   icon: <AccessTimeIcon />,
    //   image:
    //     "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",

    //   hour: "2 Hour",
    //   iconLevel: <SignalCellularAltIcon />,
    //   level: "Beginner",
    // },
    // {
    //   imageRole: CouserOne,
    //   tecknology: "Devops",
    //   application: "Aplication Support",
    //   icon: <AccessTimeIcon />,
    //   image:
    //     "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",

    //   hour: "2 Hour",
    //   iconLevel: <SignalCellularAltIcon />,
    //   level: "Beginner",
    // },
    // {
    //   imageRole: CouserOne,
    //   tecknology: "Tecnology",
    //   application: "Aplication Support",
    //   icon: <AccessTimeIcon />,
    //   image:
    //     "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",
    //   hour: "2 Hour",
    //   iconLevel: <SignalCellularAltIcon />,
    //   level: "Beginner",
    // },
    // {
    //   imageRole: CouserOne,
    //   tecknology: "React",
    //   application: "Aplication Support",
    //   icon: <AccessTimeIcon />,
    //   image:
    //     "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",

    //   hour: "2 Hour",
    //   iconLevel: <SignalCellularAltIcon />,
    //   level: "Beginner",
    // },
    // {
    //   imageRole: CouserOne,
    //   tecknology: "Devops",
    //   application: "Aplication Support",
    //   icon: <AccessTimeIcon />,
    //   image:
    //     "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",

    //   hour: "2 Hour",
    //   iconLevel: <SignalCellularAltIcon />,
    //   level: "Beginner",
    // },
  ];
  const [inpputSearch, setInputSearch] = useState("");
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleChangeSearch = (e) => {
    setInputSearch(e.target.value);
  };
  console.log(inpputSearch);
  const filterData = obj.filter((item) => {
    if (item == "") {
      return item;
    } else if (
      item.tecknology.toLowerCase().includes(inpputSearch.toLowerCase())
    ) {
      return item;
    }
  });
  // const lastIndex = page * rowsPerPage;
  // const firstIndex = lastIndex - rowsPerPage;
  // const result = filterData.slice(firstIndex, lastIndex);
  return (
    <div className="courses_main" style={{ height: "48vh" }}>
      <div>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
            paddingTop: "2%",
          }}
        >
          <br></br>
          <br></br>
          <Grid item lg={3.5} xs={12}>
            <h1>Courses</h1>
          </Grid>
          {/* <Grid item lg={3} className="Search_btn_hidden">
            <br></br>
            <br></br>
            <TextField
              style={{ width: "100%" }}
              placeholder="Search Courses"
              type="text"
              value={inpputSearch}
              onChange={handleChangeSearch}
              className="search_course"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid> */}
        </Grid>

        <Container>
          <Grid
            container
            style={{ display: "flex", justifyContent: "center" }}
            spacing={3}
            className="courses_images"
          >
            {filterData.map((item) => {
              return (
                <Grid
                  item
                  lg={3}
                  md={6}
                  sm={6}
                  xs={12}
                  // className="course_image"
                  style={{ marginBottom: "-4%" }}
                >
                  {/* <img src={item.image} alt="Image 1" /> */}
                  <Grid container className="course_image">
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                      {/* <SignalCellularAltIcon /> */}
                      <img src={item.image} className="teacher_course_image" />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}></Grid>
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={3}
                      xs={3}
                      style={{ padding: "1%" }}
                    >
                      <img
                        src={item.imageRole}
                        style={{ width: "100%", height: "5vh" }}
                      />
                      {/* <SignalCellularAltIcon /> */}
                    </Grid>
                    <div className="course_teacher">
                      <p>
                        <b>
                          {item.role} <br></br> For<br></br>
                          {item.levelCourse}
                          <br></br>
                          By {item.name}
                        </b>
                      </p>
                    </div>
                  </Grid>
                  <p style={{ textAlign: "start", margin: "0%" }}>
                    {item.tecknology}
                  </p>
                  <h5 style={{ textAlign: "start" }}>{item.application}</h5>
                  <Grid container className="slider_content_main">
                    <Grid item lg={1} md={0.8} sm={0.5} xs={1}>
                      {item.icon}
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={3}
                      xs={3}
                      className="slider_content"
                    >
                      <label>
                        <b> {item.hour}</b>
                      </label>
                    </Grid>
                    <Grid item lg={1} md={4} sm={2.5} xs={3.2}></Grid>
                    <Grid item lg={1} md={1} sm={1} xs={1}>
                      {/* <SignalCellularAltIcon /> */}
                      {item.iconLevel}
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={3}
                      sm={4.5}
                      xs={3.8}
                      className="slider_content"
                    >
                      <label>
                        <b> {item.levelCourse}</b>
                      </label>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
            {/* <div style={{ marginTop: "-5%" }}> */}
          </Grid>
        </Container>
      </div>
      {/* <div style={{ height: "1vh" }}>
        <Container>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Grid item lg={1}>
              Page: {page}
            </Grid>
            <Grid item lg={1.8}>
              <Pagination count={2} page={page} onChange={handleChange} />
            </Grid>
          </Grid>
        </Container>
      </div> */}
    </div>
  );
};

export default Courses;
