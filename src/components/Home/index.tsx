import classes from "./index.module.css";
import Banner from "../Banner";
import Card from "../Card";

function Home() {
  return (
    <>
      <Banner />
      <div className={classes.homeSection}>
        <Card
          src={
            "https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720"
          }
          title={"Aura House 2bds Eco Bamboo House, Pool, River View"}
          description={"4 guests2 bedrooms2 beds2 bathrooms"}
          price={"$450 USA"}
        />
        <Card
          src={
            "https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=960"
          }
          title={"Turtle Bay HuaHin eco luxeTurt Villa in Lotus Bay"}
          description={"2 guests1 bedroom1 bathroom"}
          price={"$152 USA"}
        />
        <Card
          src={
            "https://a0.muscache.com/im/pictures/a77b1c22-96cf-4ac0-a430-b5572c15df8a.jpg?im_w=960"
          }
          title={"Leafy Greens Chiangmai : Mushroom M2"}
          description={"2 guests1 bedroom2 beds1 bathroom"}
          price={"$30 USA"}
        />
      </div>
      <div className={classes.homeSection}>
        <Card
          src={
            "https://a0.muscache.com/im/pictures/798984ba-fef5-46c1-aa07-137d2d2998e9.jpg?im_w=720"
          }
          title={"HIDEOUT BEEHIVE - Eco Bamboo Home"}
          description={"4 guests2 bedrooms2 beds1.5 bathrooms"}
          price={"$32 USA"}
        />
        <Card
          src={
            "https://a0.muscache.com/im/pictures/31c7ff12-3f1f-4185-a1d0-e49e06036d71.jpg?im_w=960"
          }
          title={"HIDEOUT HORIZON - Eco Bamboo Home"}
          description={"4 guests2 bedrooms3 beds1.5 bathrooms"}
          price={"$50 USA"}
        />
        <Card
          src={
            "https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=960"
          }
          title={"Exclusive & Private Island Resort: Floral Island"}
          description={"16+ guests8 bedrooms8 beds9 bathrooms"}
          price={"$600 USA"}
        />
      </div>
    </>
  );
}

export default Home;
