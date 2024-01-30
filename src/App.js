import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing, News, Search, BarCode } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/gps" component={Search} />
        <Route path="/news" component={News} />

        <Route path="/bar" component={BarCode} />
      </Switch>
    </Router>
  );
}

export default App;
