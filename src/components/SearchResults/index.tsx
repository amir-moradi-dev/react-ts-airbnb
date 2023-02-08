import classes from "./index.module.css";
import { FavoriteBorder } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";

type SearchResultsProps = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: string;
  price: string;
  total: string;
};
function SearchResults(props: SearchResultsProps) {
  const { img, location, title, description, star, price, total } = props;

  return (
    <>
      <div className={classes.searchResults}>
        <img src={img} alt={title} />
        <FavoriteBorder className={classes.searchResultsHeart} />
        <div className={classes.searchResultsInfo}>
          <div className={classes.searchResultsInfoTop}>
            <p>{location}</p>
            <h3>{title}</h3>
            <p>_____</p>
            <p>{description}</p>
          </div>
          <div className={classes.searchResultsInfoBottom}>
            <div className={classes.searchResultsStars}>
              <StarIcon className={classes.searchResultStar} />
              <p>
                <strong>{star}</strong>
              </p>
            </div>
          </div>
          <div className={classes.searchResultsPrice}>
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
