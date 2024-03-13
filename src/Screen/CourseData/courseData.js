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
export const objData = [
  {
    imageRole: Cousertwo,
    tecknology: "React",
    role: "Scrum Master",
    levelCourse: "Beginner to Advance",
    name: "Samiya Khalid",
    courseName: "Srum Master",
    tecknology: "Tecnology",
    application: "IT Software",
    icon: <AccessTimeIcon />,
    image: femaleIcon,
    hour: "2 Hour",
    iconLevel: <SignalCellularAltIcon />,
    level: "Beginner",
    courseDescription:
      "Introduction to Agile and Scrum Scrum Theory and Principles Scrum Roles - Scrum Master Scrum Roles - Product Owner and Development Team Scrum Events - Sprint and Sprint Planning Scrum Events - Daily Scrum, Sprint Review, and Sprint Retrospective Artifacts - Product Backlog, Sprint Backlog, and Increment Agile Tools and Metrics Scaling Scrum and Agile Frameworks Agile Mindset and Continuous Improvement",
    CourseName: "Scrum Master",
  },
  {
    imageRole:
      "https://media.licdn.com/dms/image/D4D12AQGv-DPt8dOQEw/article-cover_image-shrink_720_1280/0/1689195252409?e=2147483647&v=beta&t=j7_AKpy0GbM5ATS3Juj3tBr7z3MfEsW-dd_YmYNt9K0",
    role: "Software Quality Assurance",
    levelCourse: "Beginner to Advance",
    name: "Jaffar Zahid",
    courseName: "SQA",
    tecknology: "Tecnology",
    application: "IT Software",
    icon: <AccessTimeIcon />,
    image: CouserFour,
    hour: "2 Hour",
    iconLevel: <SignalCellularAltIcon />,
    level: "Beginner",
    courseDescription:
      "Java, Selenium, TestNG, BDD Cucumber, Maven, JavaScript, Cypress, Playwright, Postman, Rest Assured API, SQL, Agile, Git, Jira, Jmeter, Manual & Automation",
    CourseName: "Software Quality Assurance",
  },
  {
    imageRole:
      "https://st.depositphotos.com/57404040/60706/i/450/depositphotos_607063656-stock-photo-devops-devsecops-approach-app-development.jpg",
    role: "DevOps",
    levelCourse: "Beginner to Advance",
    name: "",
    courseName: "Devops",
    tecknology: "Tecnology",
    application: "Aplication Support",
    icon: <AccessTimeIcon />,
    image:
      "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
    hour: "2 Hour",
    iconLevel: <SignalCellularAltIcon />,
    level: "Beginner",
    courseDescription:
      "Computer Network, CI/CD, Jenkins, Maven, Gradle, Docker, Kubernetes, AWS, AZURE, GCP, Ansible, Terraform, Git, Github, SonarQube, Prometheus, Grafana, ELK",
    CourseName: "DevOps",
  },
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
