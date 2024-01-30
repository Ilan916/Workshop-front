import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing, News, Search } from './pages';
import { BarCodeScanner } from './components';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header
        navigation={[
          { name: "Home", href: "/" },
          { name: "GPS", href: "/gps" },
          { name: "Barcode Scanner", href: "/bar" },
          { name: "News", href: "/news" },
        ]}
      />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/gps" component={Search} />
        <Route path="/bar" component={BarCodeScanner} />
        <Route path="/news" component={News} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
