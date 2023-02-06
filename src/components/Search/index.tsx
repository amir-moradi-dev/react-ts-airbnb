import classes from "./index.module.css";
import { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from "@mui/material";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  function handleSelect(ranges: any) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <>
      <div className={classes.searchContainer}>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h2>
          Number Of Guests
          <PeopleIcon />
        </h2>
        <input min={0} defaultValue={2} type={"number"} />
        <Button>Search Airbnb</Button>
      </div>
    </>
  );
}

export default Search;
