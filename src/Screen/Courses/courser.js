import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { InputAdornment, Modal, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CouserOne from "../../Image/sqaicon.jpg";
import { Button } from "@mui/material";

import Cousertwo from "../../Image/scrumicon.webp";
import CouserTwo from "../../Image/courseTwo.png";
import CouserThree from "../../Image/courseThree.png";
import CouserFour from "../../Image/sqateacher.jpg";
import femaleIcon from "../../Image/female.icon.png";
import { objData } from "../../Screen/CourseData/courseData";
import "./courses.css";
import { useState } from "react";
const Courses = ({ selectedData, handleClick, model, modelClose }) => {
  // const [selectedData, setSelectedData] = useState([]);
  // const [model, setModel] = useState(false);
  const [data, setData] = useState(objData);
  console.log("data", data);

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
  const filterData = data.filter((item) => {
    if (item == "") {
      return item;
    } else if (
      item.tecknology.toLowerCase().includes(inpputSearch.toLowerCase())
    ) {
      return item;
    }
  });

  // const handleClick = (item) => {
  //   setSelectedData(item);
  //   setModel(true);
  // };
  // const lastIndex = page * rowsPerPage;
  // const firstIndex = lastIndex - rowsPerPage;
  // const result = filterData.slice(firstIndex, lastIndex);
  return (
    <div>
      <div
        // className="courses_main" style={{ height: "48vh" }}
        style={{ height: model ? "auto" : "65vh" }}
      >
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
                    style={{ marginBottom: "-4%" }}
                  >
                    <Grid container className="course_image">
                      <Grid item lg={3} md={3} sm={3} xs={3}>
                        <img
                          src={item.image}
                          className="teacher_course_image"
                        />
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
                      </Grid>
                      <div className="course_teacher">
                        <p>
                          <b>
                            {item.role} <br></br> For
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
                      <Grid item lg={1.5} md={0.8} sm={1} xs={1}>
                        {item.icon}
                      </Grid>
                      <Grid
                        item
                        lg={2}
                        md={3}
                        sm={3}
                        xs={3}
                        className="slider_content"
                      >
                        <label>
                          <b> {item.hour}</b>
                        </label>
                      </Grid>
                      <Grid item lg={1.5} md={1} sm={1} xs={1}>
                        {item.iconLevel}
                      </Grid>
                      <Grid item lg={1.6} md={4} sm={3} xs={3.2}></Grid>
                      <Grid
                        item
                        lg={5.4}
                        md={3}
                        sm={4}
                        xs={3.8}
                        className="slider_content"
                      >
                        {/* <label>Beginner to Advance</label> */}
                        <Button
                          id="learn_now_btn"
                          onClick={() => handleClick(item)}
                        >
                          Learn Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </div>
      </div>{" "}
      <Container>
        {model && (
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5%",
            }}
            spacing={3}
            className="model_text"
          >
            {" "}
            {/* <div className="model_text"> */}{" "}
            <Grid item lg={11}>
              <h2>{selectedData.CourseName}</h2>{" "}
            </Grid>
            <Grid item lg={1}>
              <Button
                // onClick={() => setModel(false)}
                onClick={modelClose}
                className="model_close_btn"
              >
                {" "}
                <b>X</b>
              </Button>
            </Grid>
            <p>{selectedData.courseDescription}</p> {/* </div> */}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Courses;
