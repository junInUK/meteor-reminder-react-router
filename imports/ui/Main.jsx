import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./Tasks";
import About from "./About";
import Home from "./Home";
import CalendarFull from "./CalendarFull";
import ErrorPage from "./ErrorPage";

class Main extends Component {

    render(){
        return (
            <Router>
                <React.Fragment>
                    {/* <NavBarBS /> */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/reminders" component={Tasks} />
                        <Route path="/reminders-calendar" component={CalendarFull} />
                        <Route path="/about" component={About} />
                        <Route component={ErrorPage} />
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default Main;
