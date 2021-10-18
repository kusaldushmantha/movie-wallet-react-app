import React from "react";
import HomePage from "./modules/home";
import { Route } from "react-router-dom";

function app() {
    return (
        <Route path='/home'><HomePage/></Route>
    );
}

export default app;
