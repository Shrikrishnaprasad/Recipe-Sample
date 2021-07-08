import {
  Button,
  Card,
  IconButton,
  Snackbar,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import {
  AddShoppingCart,
  CheckCircleRounded,
  FiberManualRecordTwoTone
} from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function ItemCard({
  img,
  id,
  headTxt,
  txt1,
  txt2,
  amt,
  star,
  time,
  veg,
  setCounter,
  counter
}) {
  const [toggle, setToggle] = useState(false);
  const [added, setAdded] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const history = useHistory();
  return (
    <Card className="cardItems">
      <CardActionArea>
        <CardMedia
          className="itemImgs"
          component="img"
          alt={headTxt}
          image={img}
          title={headTxt}
          onClick={() => history.push(`/recipe/${id}`)}
        />
        <CardContent>
          <Typography variant="h5" component="h6">
            <FiberManualRecordTwoTone
              fontSize="small"
              style={{
                color: veg ? "green" : "red",
                border: veg ? "0.1px solid green" : "0.1px solid red"
              }}
            />{" "}
            {headTxt}
          </Typography>
          {!toggle ? (
            <Typography variant="body2" color="textPrimary">
              {txt1}
            </Typography>
          ) : (
            <Typography variant="body2" color="textPrimary">
              <List txt2={txt2} amt={amt} time={time} />
              <Button
                size="small"
                color={!added ? "" : "primary"}
                variant="outlined"
                onClick={() => {
                  setAdded(!added);
                  setOpen(true);
                  if (added === true) {
                    setCounter(counter - 1);
                  }
                }}
              >
                {!added ? (
                  <CartIcon setCounter={setCounter} counter={counter} />
                ) : (
                  "Added"
                )}
              </Button>
            </Typography>
          )}
          <Rating name="size-small" defaultValue={Number(star)} size="small" />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          className="center showMoreBtn"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Show {toggle ? "Less" : "More"}
        </Button>
        {added ? (
          <Button
            size="small"
            color={!added ? "" : "primary"}
            variant="outlined"
            onClick={() => {
              setAdded(!added);
              setOpen(true);
              if (added === true) {
                setCounter(counter - 1);
              }
            }}
          >
            {!added ? (
              ""
            ) : (
              <>
                Added{" "}
                <CheckCircleRounded
                  style={{ color: "green", marginLeft: "3px" }}
                />
              </>
            )}
          </Button>
        ) : (
          ""
        )}
      </CardActions>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={added ? "success" : "error"}>
          {headTxt} is {added ? "Added" : "Removed"}
        </Alert>
      </Snackbar>
    </Card>
  );
}
function List({ txt2, amt, time }) {
  return (
    <ul>
      <li>{txt2}</li>
      <li style={{ letterSpacing: "1px" }}>
        Delivery : @<span className="time">{time} mins </span>
        <b className="amt">₹ {amt}</b>
      </li>
    </ul>
  );
}
function CartIcon({ setCounter, counter }) {
  return (
    <IconButton
      size="small"
      color="primary"
      aria-label="add to shopping cart"
      onClick={() => setCounter(counter + 1)}
    >
      <AddShoppingCart />
    </IconButton>
  );
}
