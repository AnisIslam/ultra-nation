import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Country from './components/Countries/Country';
import Cart from './components/Countries/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        console.log(data);


      })
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);

  }

  return (
    <div className="App">
      <h1>Country loaded : {countries.length}</h1>
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }

      </ul>


    </div>
  );
}



export default App;
