// import { ImageList } from "@material-ui/core";
// import { ImageListItemBar, ImageListItem, Box } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import { Typography } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import projData from "../utils/projInfo.json";
import Skeleton from "@mui/lab/Skeleton";
import PropTypes from "prop-types";

// console.log(projData);
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

export default function MasonPortfolio(props) {
  const { loading = false } = props;
  return (
    <Box sx={{ width: "auto", minHeight: 829 }}>
      {loading ? (
        <Skeleton style={{ height: "500px" }} />
      ) : (
        <Masonry columns={3} spacing={1}>
          {projData.map((proj, index) => (
            <MasonryItem key={index} columnSpan={proj.col}>
              <ImageButton
                focusRipple
                key={proj.title}
                href={proj.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <ImageSrc
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + proj.image
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
                    {proj.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            </MasonryItem>
          ))}
        </Masonry>
      )}
    </Box>
  );
}

MasonPortfolio.propTypes = {
  loading: PropTypes.bool,
};
