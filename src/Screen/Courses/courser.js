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
import CouserOne from "../../Image/courseOne.png";
import CouserTwo from "../../Image/courseTwo.png";
import CouserThree from "../../Image/courseThree.png";
import CouserFour from "../../Image/courseFour.png";
import "./courses.css";
import { useState } from "react";
const Courses = () => {
  const obj = [
    {
      image: CouserTwo,
      tecknology: "Tecnology",
      application: "Aplication Support",
      icon: <AccessTimeIcon />,
      hour: "2 Hour",
      iconLevel: <SignalCellularAltIcon />,
      level: "Beginner",
    },
    {
      image: CouserTwo,
      tecknology: "React",
      application: "Aplication Support",
      icon: <AccessTimeIcon />,
      hour: "2 Hour",
      iconLevel: <SignalCellularAltIcon />,
      level: "Beginner",
    },
    {
      image: CouserThree,
      tecknology: "Devops",
      application: "Aplication Support",
      icon: <AccessTimeIcon />,
      hour: "2 Hour",
      iconLevel: <SignalCellularAltIcon />,
      level: "Beginner",
    },
    {
      image: CouserOne,
      tecknology: "Scrum",
      application: "Aplication Support",
      icon: <AccessTimeIcon />,
      hour: "2 Hour",
      iconLevel: <SignalCellularAltIcon />,
      level: "Beginner",
    },
    {
      image: CouserTwo,
      tecknology: "Tecnology",
      application: "Aplication Support",
      icon: <AccessTimeIcon />,
      hour: "2 Hour",
      iconLevel: <SignalCellularAltIcon />,
      level: "Beginner",
    },
    {
      image: CouserTwo,
      tecknology: "React",
      application: "Aplication Support",
      icon: <AccessTimeIcon />,
      hour: "2 Hour",
      iconLevel: <SignalCellularAltIcon />,
      level: "Beginner",
    },
    {
      image: CouserThree,
      tecknology: "Devops",
      application: "Aplication Support",
      icon: <AccessTimeIcon />,
      hour: "2 Hour",
      iconLevel: <SignalCellularAltIcon />,
      level: "Beginner",
    },
    {
      image: CouserTwo,
      tecknology: "Tecnology",
      application: "Aplication Support",
      icon: <AccessTimeIcon />,
      hour: "2 Hour",
      iconLevel: <SignalCellularAltIcon />,
      level: "Beginner",
    },
    {
      image: CouserTwo,
      tecknology: "React",
      application: "Aplication Support",
      icon: <AccessTimeIcon />,
      hour: "2 Hour",
      iconLevel: <SignalCellularAltIcon />,
      level: "Beginner",
    },
    {
      image: CouserThree,
      tecknology: "Devops",
      application: "Aplication Support",
      icon: <AccessTimeIcon />,
      hour: "2 Hour",
      iconLevel: <SignalCellularAltIcon />,
      level: "Beginner",
    },
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
            paddingTop: "2%",
          }}
        >
          <br></br>
          <br></br>
          <Grid item lg={5.5} xs={12}>
            <h1>Courses</h1>
          </Grid>
          <Grid item lg={1.3}>
            <br></br>
            <TextField
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
          </Grid>
        </Grid>
        <br></br>

        <Container>
          <Grid container spacing={3} className="courses_images">
            {filterData.map((item) => {
              return (
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={4}
                  xs={12}
                  className="course_image"
                >
                  <img src={item.image} alt="Image 1" />
                  <p>{item.tecknology}</p>
                  <h5>{item.application}</h5>
                  <Grid container className="slider_content_main">
                    <Grid item lg={1.5} md={0.5} sm={0.5} xs={1}>
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
                      <label>{item.hour}</label>
                    </Grid>
                    <Grid item lg={3.5} md={7} sm={6} xs={5}></Grid>
                    <Grid item lg={1.5} md={0.5} sm={0.8} xs={1}>
                      {/* <SignalCellularAltIcon /> */}
                      {item.iconLevel}
                    </Grid>
                    <Grid
                      item
                      lg={2.5}
                      md={1}
                      sm={1.5}
                      xs={1.5}
                      className="slider_content"
                    >
                      <label>{item.level}</label>
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
