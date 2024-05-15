import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import {useCart} from '../context/CartContext'
import useStyles from './Styles';

const Product = ({ product }) => {
  const classes = useStyles();
  const { addToCart, error } = useCart();



  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.imageURL} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            ${product.price}
          </Typography>

        
        
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => addToCart(product)}>
          <AddShoppingCart />
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
};

export default Product;
