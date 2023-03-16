import { useEffect, useState } from 'react';
import { getProductsFetch } from './productState';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Product, ProductElement } from './models/Product';
import { useAppSelector, useAppDispatch } from './hooks';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import React from 'react';
import ShowDetailsIcon from '@mui/icons-material/KeyboardArrowRight';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function App() {

  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.product.products);
  const [isOpened, setIsOpened] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductElement>();

  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch]);

  useEffect(() => {
   toggle();
  }, [setSelectedProduct]);


  function productListItem(p: ProductElement) {
    return <Item>
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
          <Fab size="medium" color="primary" aria-label="add" onClick={() => setSelectedProduct(p)}>
            <ShowDetailsIcon />
          </Fab>
        </ListItem>
      </div>
    </Item>;
  }

  function detailCard(item?: ProductElement) {
    return <Card sx={{ maxWidth: 450 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item?.title}
        subheader={item?.description}
      />
      <CardMedia
        component="img"
        height="194"
        image={item?.images?.at(0)}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {item?.brand}
          </Typography>
          <Typography paragraph>
            {item?.category}
          </Typography>
          <Typography paragraph>
            {item?.price}
          </Typography>
          <Typography>
            {item?.stock}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>;
  }

  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid xs={6}>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <div>{products.map(p =>
              productListItem(p)
            )}</div>
          </List>
        </Grid>
        {isOpened && (
          <Grid xs={6} spacing={2}>
            <div>
            {detailCard(selectedProduct)}
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default App;
