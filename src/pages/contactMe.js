import React, { useState } from "react";
import validator from "validator";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Typography, Divider, Button } from "@mui/material";
import emailjs from "emailjs-com";

export default function ContactMe() {
  // const [nameInput, setNameText] = useState("");
  // const [emailInput, setEmailText] = useState("");
  // const [msgInput, setMsgText] = useState("");
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Email Accepted ✓");
    } else {
      setEmailError("Please enter a valid email");
    }
  };
  const handleEmailSend = async (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_v2t8la9",
        "template_ez7qzov",
        event.target,
        "user_zzp2OJxmtkqUAgjHv4VC4"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    event.target.reset();
  };

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
            onSubmit={handleEmailSend}
          >
            <Box>
              <TextField
                fullWidth
                id="outlined-search"
                label="Name"
                type="search"
                placeholder="Please write your name here"
                name="nameInput"
              />
              <TextField
                id="outlined-search"
                label="Email"
                type="search"
                placeholder="Please write your email here"
                name="emailInput"
                onChange={(e) => validateEmail(e)}
                helperText={emailError}
              />
              <TextField
                id="outlined-textarea"
                label="Message"
                placeholder="Your message here"
                multiline
                minRows={12}
                justifyContent="flex-start"
                name="msgInput"
                marginTop="10px"
              />
            </Box>
            <Button
              variant="contained"
              justifyContent="flex-start"
              type="submit"
            >
              Send Email
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
