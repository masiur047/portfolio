import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponemt from './components/RouteComponent';

function App() {
  return (
    <Router>
      <RouteComponemt />
    </Router>
  );
}

export default App;
