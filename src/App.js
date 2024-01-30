import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing, News, Search } from './pages';
import { BarCodeScanner } from './components';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const currentPage = window.location.pathname; 
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Recherche Maps", href: "/gps" },
    { name: "Barre code", href: "/bar" },
    { name: "Actualités", href: "/news" },
  ];
  return (
    <Router>
      
      <Header navigation={navigation} currentPage={currentPage} />

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
