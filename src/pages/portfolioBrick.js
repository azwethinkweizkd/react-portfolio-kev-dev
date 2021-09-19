// import { ImageList } from "@material-ui/core";
// import { ImageListItemBar, ImageListItem, Box } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import { Typography } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));
export default function MasonPortfolio() {
  return (
    <Box sx={{ width: "auto", minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        <MasonryItem
          key={
            process.env.PUBLIC_URL +
            "/images/thimo-pedersen-TWCnHKKhqSo-unsplash.jpg"
          }
          columnSpan={2}
        >
          <ImageButton
            focusRipple
            key="Choose your pokemon"
            href="https://github.com/bonilhav/Choose_Your_Pokemon"
            rel="noopener"
          >
            <ImageSrc
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "/images/thimo-pedersen-TWCnHKKhqSo-unsplash.jpg"
                })`,
              }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Choose your pokemon
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </MasonryItem>
        <MasonryItem
          key={
            process.env.PUBLIC_URL +
            "/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg"
          }
        >
          <ImageButton
            focusRipple
            key="Fitness Tracker"
            href="https://sim-and-sin-fit-track.herokuapp.com/"
            rel="noopener"
          >
            <ImageSrc
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg"
                })`,
              }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Simple & Sinister Fitness Tracker
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </MasonryItem>
        <MasonryItem
          key={
            process.env.PUBLIC_URL +
            "/images/christin-hume-Hcfwew744z4-unsplash.jpg"
          }
        >
          <ImageButton
            focusRipple
            key="Fitness Tracker"
            href="https://code-tech-chit-chat.herokuapp.com/"
            rel="noopener"
          >
            <ImageSrc
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "/images/christin-hume-Hcfwew744z4-unsplash.jpg"
                })`,
              }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                CodeTechChitChat
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </MasonryItem>
        <MasonryItem
          key={
            process.env.PUBLIC_URL +
            "/images/katie-smith-uQs1802D0CQ-unsplash.jpg"
          }
          columnSpan={2}
        >
          <ImageButton
            focusRipple
            key="Fitness Tracker"
            href="https://kitchenforager.herokuapp.com/"
            rel="noopener"
          >
            <ImageSrc
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "/images/katie-smith-uQs1802D0CQ-unsplash.jpg"
                })`,
              }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Kitchen Forager
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </MasonryItem>
        <MasonryItem
          key={
            process.env.PUBLIC_URL +
            "/images/vincent-ledvina-a1SAq0v6AyY-unsplash.jpg"
          }
          columnSpan={2}
        >
          <ImageButton
            focusRipple
            key="14er Quiz"
            href="https://azwethinkweizkd.github.io/High-Altitude-CO-14er-Quiz/"
            rel="noopener"
          >
            <ImageSrc
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "/images/vincent-ledvina-a1SAq0v6AyY-unsplash.jpg"
                })`,
              }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Colorado 14er Quiz
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </MasonryItem>
        <MasonryItem
          key={
            process.env.PUBLIC_URL + "/images/sigmund-GfMkWvgn1PM-unsplash.jpg"
          }
        >
          <ImageButton
            focusRipple
            key="Fitness Tracker"
            href="https://azwethinkweizkd.github.io/US-Weather-Tracker-Dashboard/"
            rel="noopener"
          >
            <ImageSrc
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "/images/sigmund-GfMkWvgn1PM-unsplash.jpg"
                })`,
              }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Weather App
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </MasonryItem>

        <MasonryItem
          key={
            process.env.PUBLIC_URL +
            "/images/david-travis-5bYxXawHOQg-unsplash.jpg"
          }
        >
          <ImageButton
            focusRipple
            key="Note Taker"
            href="https://express-js-note-taker-kd.herokuapp.com/"
            rel="noopener"
          >
            <ImageSrc
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "/images/david-travis-5bYxXawHOQg-unsplash.jpg"
                })`,
              }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Note Taker
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </MasonryItem>
      </Masonry>
    </Box>
  );
}
