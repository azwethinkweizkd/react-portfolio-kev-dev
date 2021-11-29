import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faSass,
  faReact,
  faNodeJs,
  faGithubSquare,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import JQueryIcon from "../utils/jQueryIcon";
import MySqlIcon from "../utils/mySqlIcon";
import MongoDbIcon from "../utils/mongoDbIcon";

import resume from "../utils/Kevin-Devlin-Web-Development-Resume.pdf";

export default function Resume() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        size="5x"
        mt="10px"
      >
        <Grid item>
          <FontAwesomeIcon
            icon={faHtml5}
            className="icon"
            style={{ color: "rgb(228, 77, 38)", order: 1 }}
            size="10x"
          />
        </Grid>
        <Grid item>
          <JQueryIcon />
        </Grid>
        <Grid item>
          <FontAwesomeIcon
            icon={faJsSquare}
            style={{ color: "rgb(240, 219, 79)", order: 3 }}
            className="icon"
            size="10x"
          />
        </Grid>
        <Grid item>
          <FontAwesomeIcon
            icon={faNodeJs}
            style={{ color: "rgb(131, 205, 41)", order: 4 }}
            className="icon"
            size="10x"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        size="5x"
        mt="10px"
      >
        <Grid item>
          <FontAwesomeIcon
            icon={faSass}
            style={{ color: "rgb(203, 102, 153)", order: 5 }}
            className="icon"
            size="10x"
          />
        </Grid>
        <Grid item>
          <FontAwesomeIcon
            icon={faCss3}
            style={{ color: "rgb(21, 114, 182)", order: 6 }}
            className="icon"
            size="10x"
          />
        </Grid>
        <Grid item>
          <FontAwesomeIcon
            icon={faBootstrap}
            style={{ color: "#9933CC", order: 7 }}
            className="icon"
            size="10x"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        size="5x"
        mt="10px"
        mb="10px"
      >
        <Grid item>
          <FontAwesomeIcon
            icon={faGithubSquare}
            style={{ color: "rgb(243, 79, 41)", order: 8 }}
            className="icon"
            size="10x"
          />
        </Grid>
        <Grid item>
          <MySqlIcon />
        </Grid>
        <Grid item>
          <MongoDbIcon />
        </Grid>
        <Grid item>
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "rgb(97, 218, 251)", order: 11 }}
            className="icon"
            size="10x"
          />
        </Grid>
      </Grid>
      <Divider mt="5" className="fade-in" />
      <Typography variant="h4" mt="15px">
        <a
          id="resumeLink"
          href={resume}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          className="fade-in"
        >
          Download Resume
        </a>
      </Typography>
    </>
  );
}
