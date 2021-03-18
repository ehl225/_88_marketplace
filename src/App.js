import './App.css';
import { Route, Switch } from "react-router-dom";

import Header from './views/Header.js';
import Footer from './views/Footer.js';
import Home from './views/Home.js';
import AboutUs from './views/AboutUs.js'; 
import StorePolicies from './views/StorePolicies.js';
import WeeklyAd from './views/WeeklyAd.js';
import FoodCourt from './views/FoodCourt.js';
import ContactUs from './views/ContactUs.js';

export const address = '2105 S. JEFFERSON ST. CHICAGO, IL 60616';
export const email = 'Contact@88-marketplace.com';
export const phone =  'Tel: (312)-929-4926';
export const hours = 'OPEN DAILY 8:00AM-8:00PM';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/store-policies" component={StorePolicies} />
        <Route path="/weekly-ad" component={WeeklyAd} />
        <Route path="/food-court" component={FoodCourt} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
