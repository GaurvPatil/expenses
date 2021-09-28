import Home from "./pages/Home";
import Addexpense from "./pages/Addexpense";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { BrowserRouter,Switch,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <div>
      <Header />
      <Switch>
 <Route path="/" component={Home} exact />
 <Route path="/addexpense" component={Addexpense} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
   
  );
}

export default App;
