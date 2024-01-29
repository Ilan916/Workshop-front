import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< Updated upstream

import LandingPage from './components/landingPage';

=======
import { Landing, Search } from './pages';
import { BarCodeScanner } from './components';
import Header from './components/header';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Header navigation={[
        { name: 'Home', href: '/' },
        { name: 'GPS', href: '/gps' },
        { name: 'Barcode Scanner', href: '/bar' },
      ]} />
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/scanpage" component={LandingPage} />
    </Switch>
  </Router>

  );
}

export default App;
