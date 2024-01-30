import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing, News, Search } from './pages';
import { BarCodeScanner } from './components';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
<Router>
  
      <Header navigation={[
        { name: 'Home', href: '/' },
        { name: 'GPS', href: '/gps' },
        { name: 'Barcode Scanner', href: '/bar' },
      ]} />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/gps" component={Search} />
        <Route path="/news" component={News} />

        <Route path="/bar" component={BarCodeScanner} />
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
