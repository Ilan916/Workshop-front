import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing, News, Search } from './pages';
import { BarCodeScanner } from './components';



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
        <Route path="/news" component={News} />

        <Route path="/bar" component={BarCodeScanner} />
        <Route path="/news" component={News} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
