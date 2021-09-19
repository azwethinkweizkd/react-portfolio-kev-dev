import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  ListItemText,
  ListItemIcon,
  IconButton,
  ListItem,
} from "@mui/material/";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AboutMe from "../pages/aboutMe";
import MasonPortfolio from "../pages/portfolioBrick";
import ContactMe from "../pages/contactMe";
import Resume from "../pages/resume";
// const useStyles = makeStyles(() => ({}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router basename="/react-portfolio-kev-dev">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Kevin Devlin
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <AccountBoxRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="About Me" />
              </ListItem>
            </Link>
            <Link
              to="/portfolio"
              style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <WorkRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
              </ListItem>
            </Link>
            <Link
              to="/contactme"
              style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <ContactPageRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
            <Link
              to="/resume"
              style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <TextSnippetOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Resume" />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <a
              href="https://github.com/azwethinkweizkd"
              rel="noopener"
              style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary="GitHub Profile" />
              </ListItem>
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-devlin-b67b3a7a/"
              rel="noopener"
              style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText primary="LinkedIn" />
              </ListItem>
            </a>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Switch>
            <Route path="/portfolio">
              <MasonPortfolio />
            </Route>
            <Route path="/contactme">
              <ContactMe />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <AboutMe />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}
