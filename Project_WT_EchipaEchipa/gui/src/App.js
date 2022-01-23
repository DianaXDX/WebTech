import { Login } from "./components";
import { Register } from "./components/register";
import { MyFeedback } from "./components/MyFeedback";
import { AddFeedback } from "./components/AddFeedback";
import { AllFeedback } from "./components/AllFeedback";
import { EditFeedback } from "./components/EditFeedback";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/myFeedbacks">
              <MyFeedback />
            </Route>
            <Route path="/addfeedback">
              <AddFeedback />
            </Route>
            <Route path="/allfeedback">
              <AllFeedback />
            </Route>
            <Route path="/editfeedback">
              <EditFeedback />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
