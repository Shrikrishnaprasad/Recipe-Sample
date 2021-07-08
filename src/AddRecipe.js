import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Switch } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function AddRecipe() {
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Button
        onClick={() => history.goBack()}
        color="secondary"
        style={{ float: "left" }}
        variant="outlined"
      >
        Back
      </Button>
      <Container component="main" fixed>
        {/* <CssBaseline /> */}
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Recipe
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Recipe Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Text 1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  multiline
                  rows="2"
                  fullWidth
                  label="Text 2"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Image URL"
                  type=""
                />
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Amount"
                  type="number"
                  placeholder="Rs."
                />
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Time"
                  type="number"
                  placeholder="Mins"
                />
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Star"
                  type="number"
                  placeholder="4"
                />
              </Grid>

              <FormControlLabel
                control={
                  <Switch
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Non-Veg"
              />
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add +
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
