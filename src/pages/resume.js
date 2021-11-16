import React from "react";
import { Grid } from "@mui/material";
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
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

const mongoDbIcon = process.env.PUBLIC_URL + "/images/mysql.svg";

export default function Resume() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        size="5x"
      >
        <Grid item>
          <FontAwesomeIcon icon={faHtml5} className="hover:" size="10x" />
        </Grid>
        <Grid item>
          <FontAwesomeIcon icon={faReact} size="10x" />
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
          <FontAwesomeIcon icon={faSass} className="hover:" size="10x" />
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
          <FontAwesomeIcon icon={faNpm} size="10x" />
        </Grid>
        <Grid item>
          <FontAwesomeIcon icon={mongoDbIcon} size="10x" />
        </Grid>
      </Grid>
    </>
  );
}
