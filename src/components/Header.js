import React, { useState } from "react";
import "./Header.css";
import logo from "../images/logo.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Drawer,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 250,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #FEBD69",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    display: "flex",
    flexDirection: "column",
  },
  dropDownMenu: {
    width: "100%",
    height: "30px",
    marginTop: "10px",
    backgroundColor: "#ECEFF1",
    borderRadius: "7px",
    border: "1px solid lightgray",
    boxShadow: "1px 1px 4px lightgray",
  },
  button: {
    marginTop: "20px",
    height: "30px",
    backgroundColor: "#FEBD69",
    border: "1px solid brown",
    borderRadius: "5px",
    boxShadow: "1px 2px 4px lightgray",
  },
  drawerDiv: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "#37475A",
    color: "white",
  },
  list: {
    width: "70vw",
    maxWidth: "300px",
  },
}));

function Header() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("Select Country");
  const [region, setRegion] = useState("");
  const [drawOpen, setDrawOpen] = useState(false);
  const count = useSelector((state) => state.cartItem.data.length);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <Modal open={open}>
        <div style={modalStyle} className={classes.paper}>
          <h2 style={{ padding: "5px" }}>Choose your location</h2>
          <hr />
          <p style={{ fontSize: "12px", padding: "5px" }}>
            Delivery options and delivery speeds may vary for different
            locations.
          </p>
          <CountryDropdown
            className={classes.dropDownMenu}
            value={country}
            onChange={(val) => setCountry(val)}
          />
          <RegionDropdown
            className={classes.dropDownMenu}
            country={country}
            value={region}
            onChange={(val) => setRegion(val)}
          />
          <button className={classes.button} onClick={handleClose}>
            Done
          </button>
        </div>
      </Modal>
      <Drawer open={drawOpen} onClose={() => setDrawOpen(false)}>
        <div className={classes.drawerDiv}>
          <AccountCircleRoundedIcon style={{ fontSize: 30 }} />
          <h3 style={{ marginLeft: "10px" }}>Hello, Sign In</h3>
        </div>
        <List className={classes.list}>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <div className="header__menu">
        <MenuIcon onClick={() => setDrawOpen(true)} />
      </div>
      <Link to="/">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="header__signIn">Hello, Sign In</div>
      <Link to="/checkout">
        <div className="header__cart">
          <AddShoppingCartIcon fontSize="large" />
          Cart
          <span>{count}</span>
        </div>
      </Link>
      <div className="header__input">
        <input type="text" placeholder="Search Amazon"></input>
        <button>
          <SearchIcon fontSize="large" />
        </button>
      </div>
      <div className="header__location" onClick={handleOpen}>
        <LocationOnOutlinedIcon />{" "}
        <p style={{ fontWeight: "500" }}>
          Deliver to {region}, {country}
        </p>
      </div>
      <div className="header__return">Return & Orders</div>
    </div>
  );
}

export default Header;
