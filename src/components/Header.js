import React, { useState } from "react";
import "./Header.css";
import logo from "../images/logo.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import HomeIcon from "@material-ui/icons/Home";
import CloseIcon from '@material-ui/icons/Close';
import CategoryIcon from '@material-ui/icons/Category';
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
import { removeUser, clearCart } from "../actions/action";
import { auth } from '../firebase'
import { useDispatch } from "react-redux";

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
  const [text, setText] = useState('')
  const count = useSelector((state) => state.cartItem.data.length);
  const user = useSelector((state) => state.userName.data[0]?.firstname)
  const dispatch = useDispatch()
  console.log(user)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if(text.match(/computer/i)){
      window.location = '/products'
    }else if(text.match(/laptop/i)){
      window.location = '/laptopproducts'
    }else if(text.match(/toy/i)){
      window.location = '/toyproducts'
    }else if(text.match(/camera/i)){
      window.location = '/cameraproducts'
    }else if(text.match(/cosmetic/i)){
      window.location = '/beautyproducts'
    }else{
      alert("PRODUCT YOU SEARCHING IS OUT OF STOCK")
    }
  }

  const signOut = () => {
    if(user){
      dispatch(removeUser())
      dispatch(clearCart())
      auth.signOut()
    }
  }

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
          <CloseIcon fontSize="large" style={{margin: 'auto'}} onClick={() => setDrawOpen(false)}/>
        </div>
        <List className={classes.list}>
          <Link to="/" className="header__link">
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          </Link>
          <Link to="/checkout" className="header__link">
          <ListItem>
            <ListItemIcon>
              <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText>Your Cart</ListItemText>
          </ListItem>
          </Link>
          <hr />
          <ListItem>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText>Shop By Categories</ListItemText>
          </ListItem>
          <hr />
          <Link to="/basicsproducts" className="header__link">
          <ListItem>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText>Amazon Basics</ListItemText>
          </ListItem>
          </Link>
          <Link to="/beautyproducts" className="header__link">
          <ListItem>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText>Cosmetic Products</ListItemText>
          </ListItem>
          </Link>
          <Link to="/toyproducts" className="header__link">
          <ListItem>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText>Toys</ListItemText>
          </ListItem>
          </Link>
          <Link to="/exerciseproducts" className="header__link">
          <ListItem>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText>Fitness Products</ListItemText>
          </ListItem>
          </Link>
          <Link to="/products" className="header__link">
          <ListItem>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText>Computers & Accessories</ListItemText>
          </ListItem>
          </Link>
          <Link to="/laptopproducts" className="header__link">
          <ListItem>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText>Laptops</ListItemText>
          </ListItem>
          </Link>
          <Link to="/cameraproducts" className="header__link">
          <ListItem>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText>Cameras</ListItemText>
          </ListItem>
          </Link>
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
      <Link to={!user && "/login"}>
      <div className="header__signIn" onClick={signOut}>
        Hello, {user?user:''} {user?'Sign Out': 'Sign In'}
        </div>
      </Link>
      <Link to="/checkout" >
        <div className="header__cart">
          <AddShoppingCartIcon fontSize="large" />
          Cart
          <span>{count}</span>
        </div>
      </Link>
      <div className="header__input">
        <input type="text" placeholder="Search Amazon (search limited to: computer,camera,laptop,toy,cosmetic)" value={text} onChange={e => setText(e.target.value)} />
        <button onClick={handleClick}>
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
