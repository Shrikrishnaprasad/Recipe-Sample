import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 320,
    height: 320
  }
}));

export default function MediaControlCard({
  img,
  headTxt,
  txt1,
  txt2,
  amt,
  time,
  veg
}) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.cover} image={img} title={headTxt} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h4" variant="h4">
              {headTxt}
            </Typography>
            <Typography component="title1" variant="title1">
              {txt1}
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="title1" variant="title1">
              {txt1}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {txt2}
              {txt2}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </>
  );
}
