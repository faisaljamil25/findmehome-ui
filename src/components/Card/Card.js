import "./Card.css";
import Button from "@material-ui/core/Button";

const Card = () => {
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
            <div>100000</div>
            <span className="icon-eye"> 200</span>
            <span className="icon-heart"> 54</span>
            <span className="icon-bubble"> 13</span>
          </div>
          <div className="figView">
            <span className="icon-eye" />
          </div>
          <div className="figType">{3} Sharing </div>
        </div>
        <h2>Modern Residency</h2>
        <div className="cardAddress">
          <span className="icon-pointer" />
          39 Remsen St, Brooklyn, NY 11201, USA
        </div>
        <ul className="cardFeat">
          <li>
            <span className="icon-frame" /> 20 Sq Ft
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
