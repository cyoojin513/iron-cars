import Home from "./Home";
import BidForm from "./BidForm";
import Selling from "./Selling";
import SoldCars from "./SoldCars";
import NavBar from "./NavBar";
import About from "./About";
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from "react";
// Styling
import { PageWrapper, PageContent } from "./Styles/PageGrid.Style";


function App() {

  // Array of Cars for Sale
  const [cars, setCars] = useState([])
  function fetchAllCars() {
    fetch("http://localhost:9292/")
    .then((response) => response.json())
    .then((carsForSale) => setCars(carsForSale))
  }
  useEffect(()=> fetchAllCars(),[])

  // Array of Sold Cars
  const [soldCars, setSoldCars] = useState([])
  function fetchSoldCars(){
    fetch("http://localhost:9292/sold-cars")
      .then((response) => response.json())
      .then((soldCars) => setSoldCars(soldCars))
  }
  useEffect( () => fetchSoldCars(),[])

  // Fetch array of cars for sale again after POST'ing a new car
  function addingNewCar() {
    fetch("http://localhost:9292/")
    .then((response) => response.json())
    .then((carsForSale) => setCars(carsForSale))
  }
  
  return (
    <PageWrapper>
      <NavBar/>
      <PageContent>
        <Switch>
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
          <Route path="/cars/:id/bid">
            <BidForm
              fetchAllCars = {fetchAllCars}
              fetchSoldCars = {fetchSoldCars}
            />
          </Route>
          <Route path ="/about">
            <About />
          </Route>
          <Route exact path ="/">
            <Home
              cars = {cars}
            />
          </Route>
        </Switch>
        </PageContent>
    </PageWrapper>
  );
}

export default App;
