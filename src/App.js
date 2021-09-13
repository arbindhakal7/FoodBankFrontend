import './App.css';
import React from 'react';
import './css/style.css'
//  import './css/skel.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Start from './Components/Start';

function App() {
  return (
  <BrowserRouter>
<div>
<Start/>

</div>
</BrowserRouter>
  );
}

export default App;