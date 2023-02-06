import classes from "./index.module.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <>
      <footer className={classes.footer}>
        <CopyrightIcon />
        <p>Airbnb Clone - No Rights Reserved</p>
      </footer>
    </>
  );
}

export default Footer;
