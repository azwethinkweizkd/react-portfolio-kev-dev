import React from "react";
import { Typography } from "@mui/material";
import { Grid, Divider } from "@mui/material";
const me = process.env.PUBLIC_URL + "/images/professional-photo.jpg";

export default function AboutMe() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={4}>
          <img src={me} alt="Kevin Devlin" className="photo" />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Typography variant="h1" component="h2" mb={5}>
            Kevin Devlin
          </Typography>
          <Typography paragraph>
            Full Stack Web Developer with a background in CAD design and 3D
            Printing manufacturing. Recently earned a certificate in Full Stack
            Web Development Coding Bootcamp from the University of Denver, with
            growing aspirations of a fresh career using newly acquired and
            continuously developed skills in Javascript, jQuery, Node.js,
            React.js, Express and other coding languages used in responsive web
            design. During my time, I collaborated on several projects with
            teammates to deliver a minimal viable project, with the most recent
            being a MERN stack application. Impassioned by problem solving
            coding challenges as a project team member to develop new and
            innovative web applications. I excel in customer-input driven
            design, organizing teams for effective work-flow, and fulfilling
            deliverable deadlines of expected products during my professional
            career in 3D printing medical device manufacturing.
          </Typography>
        </Grid>
      </Grid>
      <Divider mt={10} />
    </>
  );
}
