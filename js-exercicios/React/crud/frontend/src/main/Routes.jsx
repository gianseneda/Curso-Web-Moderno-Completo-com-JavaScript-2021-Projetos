import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />{" "}
    {/*o exact quer dizer que APENAS o / vai pro home, pois o users tb tem barra*/}
    <Route exact path="/users" component={UserCrud} />
    <Redirect from="*" to="/" /> {/* qualquer outra URL vai para a HOME (/) */}
  </Switch>
);
