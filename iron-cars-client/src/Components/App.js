import Home from "./Home";
import Bidding from "./Bidding";
import Selling from "./Selling";
import SoldCars from "./SoldCars";
import NavBar from "./NavBar";
import {Route, Switch } from 'react-router-dom';
import { useEffect, useState } from "react";


function App() {

  // Array of Cars for Sale
  const [cars, setCars] = useState([])
  useEffect(()=> {
    fetch("http://localhost:9292/")
      .then((response) => response.json())
      .then((carsForSale) => setCars(carsForSale))
  },
  [])

  // Array of Sold Cars
  const [soldCars, setSoldCars] = useState([])
  useEffect(()=> {
    fetch("http://localhost:9292/sold-cars")
      .then((response) => response.json())
      .then((soldCars) => setSoldCars(soldCars))
  },
  [])

  function addingNewCar() {
    fetch("http://localhost:9292/")
    .then((response) => response.json())
    .then((carsForSale) => setCars(carsForSale))
  }
  
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/bid">
          <Bidding/>
        </Route>
        <Route path ="/sell">
          <Selling
            addingNewCar = {addingNewCar}
          />
        </Route>
        <Route path= "/sold-cars">
          <SoldCars
            soldCars = {soldCars}
          />
        </Route>
        <Route exact path ="/">
          <Home
            cars = {cars}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
