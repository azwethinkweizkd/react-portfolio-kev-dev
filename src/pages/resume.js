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
          <FontAwesomeIcon icon={faHtml5} className="hover:" size="10x" />
        </Grid>
        <Grid item>
          <JQueryIcon />
        </Grid>
        <Grid item>
          <FontAwesomeIcon icon={faJsSquare} size="10x" />
        </Grid>
        <Grid item>
          <FontAwesomeIcon icon={faNodeJs} size="10x" />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        size="5x"
        mt="10"
      >
        <Grid item>
          <FontAwesomeIcon icon={faSass} size="10x" />
        </Grid>
        <Grid item>
          <FontAwesomeIcon icon={faCss3} size="10x" />
        </Grid>
        <Grid item>
          <FontAwesomeIcon icon={faBootstrap} size="10x" />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        size="5x"
        mt="10"
      >
        <Grid item>
          <FontAwesomeIcon icon={faGithubSquare} size="10x" />
        </Grid>
        <Grid item>
          <MySqlIcon />
        </Grid>
        <Grid item>
          <MongoDbIcon />
        </Grid>
        <Grid item>
          <FontAwesomeIcon icon={faReact} size="10x" />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        size="5x"
        mt="10"
        mb="15px"
      ></Grid>
      <Divider />
      <Typography variant="h4" mt="15px">
        <a
          id="resumeLink"
          href={resume}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          Download Resume
        </a>
      </Typography>
    </>
  );
}
