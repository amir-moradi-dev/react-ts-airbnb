import classes from "./index.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className={classes.headerContainer}>
        <Link to={"/"} className={classes.headerLogo}>
          <img src={"/assets/images/Airbnb_Logo.png"} alt={"header_logo"} />
        </Link>

        <div className={classes.headerSearch}>
          <input type={"text"} />
          <SearchIcon />
        </div>

        <div className={classes.headerOptions}>
          <p>Become a Host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />
        </div>
      </header>
    </>
  );
}

export default Header;
