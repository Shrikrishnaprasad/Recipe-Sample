import {
  AppBar,
  Badge,
  Button,
  Fab,
  IconButton,
  Toolbar
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export function Appbar({ counter }) {
  const history = useHistory();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button color="inherit" onClick={() => history.push("/")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => history.push("/recipes")}>
          Recipes
        </Button>
        <Button color="inherit" onClick={() => history.push("/cart")}>
          Cart
        </Button>
        <Button color="inherit" onClick={() => history.push("/users")}>
          Users
        </Button>
        <IconButton
          size="large"
          className="App_floatingBar"
          style={{ fontWeight: "bold", float: "right", marginLeft: "auto" }}
        >
          <Badge badgeContent={counter} color="primary">
            <Fab className="App_header_fab">
              <ShoppingCart />
            </Fab>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
