import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from "./pages/admin-page";
import App from "./App";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/admin-page' component={AdminPage}/>
        </Switch>
    </BrowserRouter>
)