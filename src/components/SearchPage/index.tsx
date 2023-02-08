import classes from "./index.module.css";
import ButtonIcon from "@mui/material/Button";
import SearchResults from "../SearchResults";

function SearchPage() {
  return (
    <>
      <div className={classes.searchPage}>
        <div className={classes.searchPageInfo}>
          <p>78 stays - 16 august to 20 august - 2 guest </p>
          <h1>Stays Nearby</h1>
          <ButtonIcon variant={"outlined"}>Cancellation Flexibility</ButtonIcon>
          <ButtonIcon variant={"outlined"}>Type Of Place</ButtonIcon>
          <ButtonIcon variant={"outlined"}>Price</ButtonIcon>
          <ButtonIcon variant={"outlined"}>Rooms And Beds</ButtonIcon>
          <ButtonIcon variant={"outlined"}>More Filters</ButtonIcon>
        </div>
        <SearchResults
          img={
            "https://a0.muscache.com/im/pictures/4a5c629b-9c92-450e-8d8f-995875798838.jpg?im_w=960"
          }
          location={"Tampaksiring, Bali, Indonesia"}
          title={"Dome - Bamboo Villa in Eco Six Bali"}
          description={"2 guests1 bedroom1 bed1 bathroom"}
          star={"4.86"}
          price={"56 USA"}
          total={"100 USA"}
        />
        <SearchResults
          img={
            "https://a0.muscache.com/im/pictures/9ee15529-6596-4b96-95e5-06777bfed126.jpg?im_w=960"
          }
          location={"Abiansemal, Bali, Indonesia"}
          title={"Sharma Springs 5 bds Luxurious Bamboo Mansion Pool"}
          description={"Abiansemal, Bali, Indonesia"}
          star={"5.0"}
          price={"700 USA"}
          total={"900 USA"}
        />
        <SearchResults
          img={
            "https://a0.muscache.com/im/pictures/81fd4a6a-5856-4ef4-afed-0ca3c6dff4dd.jpg?im_w=960"
          }
          location={"Tampaksiring, Bali, Indonesia"}
          title={"Khaoyai TreeHouse"}
          description={"2 guests1 bathroom"}
          star={"5.0"}
          price={"60 USA"}
          total={"90 USA"}
        />
      </div>
    </>
  );
}

export default SearchPage;
