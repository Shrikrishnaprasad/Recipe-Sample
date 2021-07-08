import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ImageList, ImageListItem } from "@material-ui/core";
//import itemData from "./itemData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  imageList: {
    width: 500,
    height: 450
  }
}));

export default function BasicImageList() {
  const classes = useStyles();
  const itemData = [
    {
      img:
        "https://b.zmtcdn.com/data/dish_photos/d0d/b08cf2542f97c1d823a5df200dbead0d.jpg?fit=around|130:130&crop=130:130;*,*",
      title: "Food Image",
      author: "image",
      cols: 2
    },
    {
      img:
        "https://b.zmtcdn.com/data/dish_photos/d0d/b08cf2542f97c1d823a5df200dbead0d.jpg?fit=around|130:130&crop=130:130;*,*",
      title: "Food Image",
      author: "image",
      cols: 2
    }
  ];

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {itemData.map((item) => {
          return (
            <ImageListItem key={item.img} cols={item.cols || 1}>
              <img src={item.img} alt={item.title} />
            </ImageListItem>
          );
        })}
      </ImageList>
    </div>
  );
}
