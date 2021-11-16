import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Typography, Divider, Button } from "@mui/material";

export default function ContactMe() {
  return (
    <>
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h2" noWrap component="div" textAlign="center">
            Let's Talk!
          </Typography>
          <Divider />
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "124ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              id="outlined-search"
              label="Name"
              type="search"
              placeholder="Please write your name here"
            />
            <TextField
              id="outlined-search"
              label="Email"
              type="search"
              placeholder="Please write your email here"
            />
            <TextField
              id="outlined-textarea"
              label="Message"
              placeholder="Your message here"
              multiline
              minRows={12}
              justifyContent="flex-start"
            />
          </Box>
          <Button variant="contained" justifyContent="flex-start">
            Send Email
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
