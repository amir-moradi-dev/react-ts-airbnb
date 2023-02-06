import classes from "./index.module.css";

type CardProps = {
  src: string;
  title: string;
  description: string;
  price: string;
};
function Card(props: CardProps) {
  const { src, title, description, price } = props;
  return (
    <>
      <div className={classes.card}>
        <img src={src} alt={title} />
        <div className={classes.cardInfo}>
          <h2>{title}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
      </div>
    </>
  );
}

export default Card;
