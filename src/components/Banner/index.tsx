import classes from "./index.module.css";
import ButtonIcon from "@mui/material/Button";
import { useState } from "react";
import Search from "../Search";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <div className={classes.bannerContainer}>
        <div className={classes.bannerSearch}>
          {showSearch && <Search />}
          <ButtonIcon
            onClick={() => setShowSearch(!showSearch)}
            className={classes.bannerSearchButton}
            variant={"outlined"}
          >
            {showSearch ? "hide" : "Search Date"}
          </ButtonIcon>
        </div>
        <div className={classes.bannerInfo}>
          <h1>Get out and stretch your imagination</h1>
          <h5>
            Plan a different kind of gateway to uncover the hidden gems near
            you.
          </h5>
          <ButtonIcon variant={"outlined"} onClick={() => navigate("/search")}>
            Explore Nearby
          </ButtonIcon>
        </div>
      </div>
    </>
  );
}

export default Banner;
