import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import MediaControlCard from "./MediaControlCard";
//import { dataRecipes } from "./test";

export function Recipe() {
  const { rid } = useParams();
  //   // ALL_COMPANY_DETAILS
  // console.log( "filter",  ALL_COMPANY_DETAILS.filter( detail => detail.id ===  companyid) )
  // console.log( "find", ALL_COMPANY_DETAILS.find( detail => detail.id ===  companyid) )
  //const recp = dataRecipes.find((detail) => detail.id === Number(rid));
  // api call - Get call with filter companyid
  const [recp, setRecp] = useState({});
  useEffect(() => {
    loadRecipe();
  }, []);
  function loadRecipe() {
    fetch(`https://60c83b2fafc88600179f660c.mockapi.io/user/recipes/${rid}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => setRecp(data))
      .catch((e) => console.log(e));
  }
  console.log(recp);
  const history = useHistory();
  return (
    <div>
      <Button onClick={() => history.goBack()} color="secondary">
        Back
      </Button>
      {rid}
      <MediaControlCard
        img={recp.img}
        headTxt={recp.headTxt}
        txt1={recp.txt1}
        txt2={recp.txt2}
        amt={recp.amt}
        time={recp.time}
        veg={recp.veg}
      />
    </div>
  );
}
