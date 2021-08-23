import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';
import Mid from './Components/Start';
import Start from './Components/Start';

function App() {
  return (
  <BrowserRouter>
<div>
<Header>

</Header>
<Start>
  
</Start>
</div>
</BrowserRouter>
  );
}

export default App;
