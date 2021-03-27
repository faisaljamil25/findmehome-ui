import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Drawer from '../../components/dashboard/navbars/drawer';
import {
  Grid,
  Box,
  makeStyles,
  createStyles,
  Typography,
} from '@material-ui/core';
import DenseTable from '../../components/Table/MyHouseTable';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      border: 'solid 2px black',
      display: 'flex',
      justifyContent: 'center',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(14),
      },
    },
    content: {
      marginTop: '50px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      margin: 'auto',
      color: '#7a1139',
      marginTop: '25px',
      marginBottom: '15px',
      fontWeight: '900',
    },
    workarea: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
);
const fetchHouses = async () => {
  try {
    const body = `query{
                getMyHouses{
                    _id
                    name
                    totalSharing
                    city
                    rent
                }
                }`;
    const myhouse = await axios.post(
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

    const allhouse = myhouse.data.data.getMyHouses;
    return allhouse;
  } catch (e) {
    console.log(e.response.data);
  }
};
const MyHouses = () => {
  const classes = useStyles();
  const [house, setHouse] = useState([]);
  useEffect(() => {
    fetchHouses()
      .then((data) => {
        setHouse(data);
      })
      .catch((e) => console.log(e));
  }, [setHouse]);

  return (
    <>
      <div>
        <Drawer />
        <Grid container className={classes.content}>
          <Box>
            <Typography variant='h4' className={classes.heading}>
              My Houses
            </Typography>
          </Box>
        </Grid>
        <Box className={classes.root}>
          <Grid container className={classes.workarea}>
            <Grid item xs={12} lg={12}>
              <DenseTable data={house} />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default MyHouses;
