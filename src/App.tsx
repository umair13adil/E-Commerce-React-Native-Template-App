import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFetch } from './productState';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { RootState } from './store';
import { Product, ProductElement } from './models/Product';
import { useAppSelector, useAppDispatch } from './hooks';
import Grid from '@mui/material/Grid';
import Grid2 from '@mui/material/Unstable_Grid2';

import React from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.product.products);

  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid xs={4}>
          <Item>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <div>{products.map(p =>
          <div key={p.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={p.thumbnail} />
              </ListItemAvatar>
              <ListItemText
                primary={p.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {p.description}
                  </React.Fragment>
                }
              />
            </ListItem>
          </div>
        )}</div>
      </List>
          </Item>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
