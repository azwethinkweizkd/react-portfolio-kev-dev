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
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import JQueryIcon from "../utils/jQueryIcon";
import resume from "../utils/Kevin Devlin Web Development Resume.pdf";
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  return (
    <>
      {/* <Typography variant="h2" style={{ textDecoration: "underline" }}>
        Skills
      </Typography> */}
      <Typography variant="h4" mb="10px">
        <a href={resume} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </Typography>
      <Divider />
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
          <FontAwesomeIcon icon={faNpm} size="10x" />
        </Grid>
        <Grid item>
          <JQueryIcon />
        </Grid>
      </Grid>

      {/* <a
        href="https://docs.google.com/document/d/1VmsXYDL_p10h3tUGuivyjckNsd5LQJDzMldX0lSVFfI/edit?usp=sharing"
        rel="noreferrer"
        target="_blank"
        alignItems="center"
      >
        <Document
          file={resume}
          onLoadError={console.error}
          style={{ width: "100vw", height: "auto" }}
        >
          <Page pageIndex={0} />
        </Document>
      </a> */}
    </>
  );
}
