import React from 'react';
import { Route, Switch, hashHistory } from 'react-router-dom';

import HomePageComponent from 'components/home/container/HomePageComponent';
import LoginComponent from 'components/Login/container/LoginComponent';
import UserComponent from 'components/Management/User/container/UserComponent';
import EventComponent from 'components/Management/User/container/EventComponent';
import SettingsComponent from 'components//Management/Dashboards/container/SettingsComponent';

export default (
    <Switch>
        <Route exact path="/" component={HomePageComponent}/>
        <Route path="/login" component={LoginComponent}/>
        <Route path="/settings" component={SettingsComponent}/>
        <Route path="/event" component={EventComponent}/>
        <Route path="/user" component={UserComponent}/>
    </Switch>
);
