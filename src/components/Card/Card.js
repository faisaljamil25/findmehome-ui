import React, { useContext } from 'react';
import './Card.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Snackbar from '../../context/snackbar';
import AuthContext from '../../context/auth';

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
  const history = useHistory();
  const context = React.useContext(AuthContext);
  const Context2 = useContext(Snackbar);
  const handleBookRoom = async (id) => {
    try {
      const body = `mutation{
  createBooking(HouseId:"${id}"){
    name
    currentSharing
    totalSharing
  }
}`;
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/graphql`,
        {
          query: body,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.data.data.createBooking.name)
        Context2.openbarfun('success', 'House Booked');
      history.push('/');
    } catch (error) {
      console.log(error);
      Context2.openbarfun('error', 'House Already Booked');
    }
  };
  return (
    <div className='singleHouse'>
      <div className='card'>
        <div className='figure'>
          <img src='/house.jpg' alt='bg' />
          <div className='figCaption'>
            <div>{rent}</div>
            <span className='icon-eye'> 200</span>
            <span className='icon-heart'> 54</span>
            <span className='icon-bubble'> 13</span>
          </div>
          <div className='figView'>
            <span className='icon-eye' />
          </div>
          <div className='figType'>{totalSharing} Sharing </div>
        </div>
        <h2>{name}</h2>
        <div className='cardAddress'>
          <span className='icon-pointer' />
          {address}
        </div>
        <ul className='cardFeat'>
          <li>
            <span className='icon-frame' /> {dimensions}
          </li>
        </ul>
        <Button
          variant='contained'
          color='primary'
          aria-label='Book-Room'
          onClick={() => {
            context.authdata.isLoggedIn
              ? handleBookRoom(_id)
              : history.push('/signup');
          }}
          size='small'
        >
          Book Room
        </Button>
      </div>
    </div>
  );
};

export default Card;
