import "./Card.css";
import Button from "@material-ui/core/Button";

const Card = ({
  name,
  rent,
  totalSharing,
  _id,
  address,
  description,
  dimensions,
  city,
}) => {
  const handleBookRoom = (e) => {
    e.preventDefault();
    console.log("booked");
  };
  return (
    <div className="singleHouse">
      <div className="card">
        <div className="figure">
          <img src="/house.jpg" alt="bg" />
          <div className="figCaption">
            <div>{rent}</div>
            <span className="icon-eye"> 200</span>
            <span className="icon-heart"> 54</span>
            <span className="icon-bubble"> 13</span>
          </div>
          <div className="figView">
            <span className="icon-eye" />
          </div>
          <div className="figType">{totalSharing} Sharing </div>
        </div>
        <h2>{name}</h2>
        <div className="cardAddress">
          <span className="icon-pointer" />
          {address}
        </div>
        <ul className="cardFeat">
          <li>
            <span className="icon-frame" /> {dimensions}
          </li>
        </ul>
        <Button
          variant="contained"
          color="primary"
          aria-label="Book-Room"
          onClick={handleBookRoom}
          size="small"
        >
          Book Room
        </Button>
      </div>
    </div>
  );
};

export default Card;
