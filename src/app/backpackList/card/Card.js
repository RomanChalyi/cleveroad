import React from 'react';
import {
  IconButton,
  Card as MaterialCard,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { getDays } from '../../../utils';
import { card, cardIcon, cardIconEdit, cardPrice } from './card.module.scss';

const Card = ({
  title,
  description,
  photo,
  price,
  discountPrice,
  discountPricePeriod,
  handleEdit,
  id,
}) => {
  return (
    <MaterialCard className={card}>
      <CardMedia component="img" alt="backpack" height="280" image={photo} title="backpack" />
      <CardContent>
        <Typography gutterBottom align="center" variant="h5" component="h2">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" align="center" color="textPrimary" component="p">
          {description}
        </Typography>
        <Typography
          className={discountPrice ? cardPrice : ''}
          gutterBottom
          variant="body1"
          align="center"
          color="primary"
          component="p"
        >
          ${price}
        </Typography>
        {!!discountPrice && (
          <>
            <Typography variant="body1" align="center" color="secondary" component="p">
              -{discountPrice}%
            </Typography>
            <Typography variant="body1" align="center" color="secondary" component="p">
              ${(price * (1 - discountPrice / 100)).toFixed(2)}
            </Typography>
            <Typography variant="body1" align="center" color="primary" component="p">
              Will end {getDays(discountPricePeriod)}
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions className={cardIcon}>
        <IconButton onClick={handleEdit(id)} className={cardIconEdit} color="primary">
          <EditIcon />
        </IconButton>
      </CardActions>
    </MaterialCard>
  );
};

export default Card;
