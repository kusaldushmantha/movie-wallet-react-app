import React, { Fragment } from "react";
import HomePage from "./modules/home";
import { Redirect, Route, Switch } from "react-router-dom";

function app() {
    return (
        <Fragment>
            <Switch>
                <Route path='/' exact> <Redirect to='/app'/> </Route>
                <Route path='/app' exact><HomePage/></Route>
            </Switch>
        </Fragment>
    );
}

export default app;
