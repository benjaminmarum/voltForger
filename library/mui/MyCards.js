import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, CardHeader, Avatar } from '@mui/material';

function MyCard() {
  return (
    <Card sx={{ maxWidth: 345 }}> // The main card container.
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2021"
      />

      <CardActionArea> // The primary clickable area of the card.
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />

        <CardContent> // The main content area of the card.
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with sizes ranging from small geckos and anoles to large monitor lizards and iguanas.
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions> // The actions related to the card.
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default MyCard;


// Here are the different card-related components that Material-UI provides:

// Card: This is the main component that represents the card itself.

// CardActionArea: This is a clickable area within the card that is used to contain the primary content (like an image or primary text) that leads to more details when clicked.

// CardActions: This area typically contains actions related to the primary content, like buttons to take some action related to the card.

// CardContent: This is a container for the main textual content of the card.

// CardMedia: This component is used to display media (like images or video) within the card.

// CardHeader: This is an optional header for the card. It can include a title, a subheader, and an avatar.
