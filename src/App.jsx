import React from "react";
import Navbar from "./Navbar";
import { Route, Switch } from 'wouter';
import Homepage from "./Homepage";
import Productpage from "./Productpage";
import Cartpage from "./Cartpage";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
import ServiceForm from "./ServiceForm";
import ServiceTable from "./ServiceTable";
import ItemTable from "./ItemTable";
import ItemForm from "./ItemForm";
import ItemDelete from "./ItemDelete";
import ServiceDelete from "./ServiceDelete";
import ProductDelete from "./ProductDelete";
import RegisterUserPage from "./RegisterUserPage";
import RegisterStaffPage from "./RegisterStaffPage";
import LoginPage from "./LoginPage";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/products" component={Productpage} />
          <Route path="/cart" component={Cartpage} />
          <Route path="/producttable" component={ProductTable} />
          <Route path="/productform" component={ProductForm} />
          <Route path="/productform/:id" component={ProductForm} />
          <Route path="/productdelete/:id" component={ProductDelete} />
          <Route path="/servicetable" component={ServiceTable} />
          <Route path="/serviceform" component={ServiceForm} />
          <Route path="/serviceform/:id" component={ServiceForm} />
          <Route path="/servicedelete/:id" component={ServiceDelete} />
          <Route path="/itemtable" component={ItemTable} />
          <Route path="/itemform" component={ItemForm} />
          <Route path="/itemform/:id" component={ItemForm} />
          <Route path="/itemdelete/:id" component={ItemDelete} />
          <Route path="/registeruser" component={RegisterUserPage} />
          <Route path="/registerstaff" component={RegisterStaffPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </AuthProvider>
    </>
  )
}

export default App;