import "./Card.css";

const Card = () => {
  return (
    <div className="singleHouse">
      <a href="/" className="card">
        <div className="figure">
          <img src="/house.jpg" alt="bg" />
          <div className="figCaption">
            <div>1,550,000</div>
            <span className="icon-eye"> 200</span>
            <span className="icon-heart"> 54</span>
            <span className="icon-bubble"> 13</span>
          </div>
          <div className="figView">
            <span className="icon-eye" />
          </div>
          <div className="figType">FOR SALE</div>
        </div>
        <h2>Modern Residency</h2>
        <div className="cardAddress">
          <span className="icon-pointer" />
          39 Remsen St, Brooklyn, NY 11201, USA
        </div>
        <ul className="cardFeat">
          <li>
            <span className="fa fa-moon-o" /> 3
          </li>
          <li>
            <span className="icon-drop" /> 2
          </li>
          <li>
            <span className="icon-frame" /> 20 Sq Ft
          </li>
        </ul>
      </a>
    </div>
  );
};

export default Card;
