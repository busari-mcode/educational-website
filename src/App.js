import './App.css';
import Header from './components/common/heading/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/common/home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/courses" exact component={CourseHome} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
