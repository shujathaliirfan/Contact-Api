

import Layout from "./Layout/Layout"; 
import { Switch ,Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";

import Add from "./Pages/Add";


function App() {
  return (
  
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blogs"  component={Blogs} />
        <Route path="/add" component={Add} />
      </Switch>
    </Layout>

  );
}

export default App;
