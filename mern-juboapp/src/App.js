import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


import OrdersList from "./componets/orders-list.componet";
import EditOrder from "./componets/edit-order.componet";


function App() {
  return (
//Router breaks 
//Material UI Breaks
    <html>
   
    <div className="App">
      <header className="App-header">
       
        <p>
          Hello There
        </p>
      </header>

  

    </div>

    <body className="App-body">
    <div>
      <p>Pateint List</p>
    </div>





    </body>
    </html>

  );
}

export default App;
