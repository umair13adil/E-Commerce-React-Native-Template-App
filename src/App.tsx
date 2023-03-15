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
import Fab from '@mui/material/Fab';
import React from 'react';
import ShowDetailsIcon from '@mui/icons-material/KeyboardArrowRight';

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
      <Grid container spacing={0}>
        <Grid xs={6}>
          <Item>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <div>{products.map(p =>
                <div key={p.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={p.title} src={p.images?.at(0)} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={p.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="caption"
                            color="text.primary"
                          >{p.description}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                    <Fab size="medium" color="primary" aria-label="add">
                      <ShowDetailsIcon />
                    </Fab>
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
