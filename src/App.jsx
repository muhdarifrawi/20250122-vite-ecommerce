import React from "react";
import Navbar from "./Navbar";
import { Route, Switch } from 'wouter';
import Homepage from "./Homepage";
import Productpage from "./Productpage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/products" component={Productpage} />
      </Switch>
    </>
  )
}

export default App;