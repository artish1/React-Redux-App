import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 280,
    marginBottom: 25
  },
  title: {
    fontSize: 14
  },
  media: {
    height: 140
  },
  pos: {
    marginBottom: 12
  }
});

const WordCard = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          props.image
            ? props.image
            : "https://www.cowgirlcontractcleaning.com/wp-content/uploads/sites/360/2018/05/placeholder-img-2.jpg"
        }
        title="visual example of definition"
      />

      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.wordType}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.word}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          {props.pronunciation}
        </Typography>
        <Typography variant="body2" component="p">
          {props.definition}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          "{props.wordExample}"
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WordCard;
