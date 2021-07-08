import "./styles.css";
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import { Route, Switch, useHistory } from "react-router-dom";
import { Home } from "./Home";
import { PageNotFound } from "./PageNotFound";
import { Cart } from "./Cart";
import { dataRecipes } from "./test";
import { Appbar } from "./Appbar";
import { Recipe } from "./Recipe";
import { Users } from "./Users";
export default function App() {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch("https://60c83b2fafc88600179f660c.mockapi.io/user/recipes", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((recipes) => setRecipe(recipes))
      .catch((e) => setRecipe(dataRecipes));
  }, []);
  //console.log(<ItemCard/>);
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const history = useHistory();
  return (
    <div className="App container">
      <Appbar counter={counter} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/recipes">
          <div className="App_header">
            <Button onClick={() => history.goBack()} color="secondary">
              Back
            </Button>
            <div className="App_heading">
              <b>Tasty Recipes</b>
            </div>
            <TextField
              size="small"
              onChange={(event) => setSearch(event.target.value)}
              label="Search"
              id="outlined-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">🔍</InputAdornment>
                )
              }}
              variant="outlined"
            />
          </div>
          <div className="card">
            {recipe
              .filter((data) =>
                data.headTxt.toLowerCase().includes(search.toLowerCase())
              )
              .map((rec) => (
                <ItemCard
                  id={rec.id}
                  img={rec.img}
                  headTxt={rec.headTxt}
                  txt1={rec.txt1}
                  txt2={rec.txt2}
                  amt={rec.amt}
                  star={rec.star}
                  time={rec.time}
                  veg={rec.veg}
                  setCounter={setCounter}
                  counter={counter}
                />
              ))}
          </div>
        </Route>
        <Route path="/recipe/:rid">
          <Recipe />
        </Route>
        <Route path="/cart">
          <Cart counter={counter} />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <PageNotFound />
      </Switch>
    </div>
  );
}

// function CardItem({ img, headTxt, txt1, txt2, amt }) {
//   const [toggle, setToggle] = useState(false);
//   const [added, setAdded] = useState(false);
//   const [open, setOpen] = useState(false);
//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpen(false);
//   };

//   function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
//   }

//   return (
//     <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-1">
//       <Card className="card shadow p-1 m-1 bg-white rounded-lg">
//         <img src={img} className="card-img-top p-2" alt="food-img" />
//         <div className="card-body">
//           <h5 className="card-title text-body">
//             <b>{headTxt}</b>
//           </h5>

//           {toggle ? (
//             <p className="card-text text-dark p-1">
//               <List txt2={txt2} amt={amt} />
//               <button
//                 className={
//                   added
//                     ? " btn btn-outline-success"
//                     : "btn btn-outline-secondary"
//                 }
//                 onClick={() => {
//                   setAdded(!added);
//                   setOpen(true);
//                 }}
//               >
//                 {!added ? "Add +" : "Added"}
//               </button>
//             </p>
//           ) : (
//             <p className="card-text text-muted">{txt1}</p>
//           )}
//           <button
//             className="btn-success mb-1 btn-showMore"
//             onClick={() => {
//               setToggle(!toggle);
//             }}
//           >
//             Show {toggle ? "Less" : "More"}
//           </button>
//         </div>
//       </Card>
//       <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity={added ? "success" : "error"}>
//           {headTxt} is {added ? "Added" : "Removed"}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }

// function List({ txt2, amt }) {
//   return (
//     <ul>
//       <li>{txt2}</li>
//       <li>
//         <b className="text-success amt">₹ {amt}</b>
//       </li>
//     </ul>
//   );
// }
