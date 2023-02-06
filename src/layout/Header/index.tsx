import classes from "./index.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <>
      <header className={classes.headerContainer}>
        <div className={classes.headerLogo}>
          <img src={"/assets/images/Airbnb_Logo.png"} alt={"header_logo"} />
        </div>

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
