import React from "react";
import Navbar from "./Navbar";
import { Route, Switch } from 'wouter';
import Homepage from "./Homepage";
import Productpage from "./Productpage";
import Cartpage from "./Cartpage";
import ProductTable from "./ProductTable";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/products" component={Productpage} />
        <Route path="/cart" component={Cartpage} />
        <Route path="/producttable" component={ProductTable}/>
      </Switch>                                               
    </>
  )
}

export default App;