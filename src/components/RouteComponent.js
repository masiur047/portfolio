import React from "react";
import { Switch, Route } from "react-router-dom";

import NavigationComponent from "./NavigationComponent";
import ProfileScreen from "../screens/ProfileScreen";
import ProjectScreen from "../screens/ProjectScreen";
import SkillsScreen from "../screens/SkillsScreen";
import ContactScreen from "../screens/ContactScreen";
import AboutScreen from "../screens/AboutScreen";
import CvScreen from "../screens/CvScreen";




const RouteComponemt = () => (
    <div>
        <NavigationComponent />
        <Switch>
            <Route path="/" exact component={ProfileScreen} />
            <Route path="/profile" exact component={ProfileScreen} />
            <Route path="/projects" exact component={ProjectScreen} />
            <Route path="/skills" exact component={SkillsScreen} />
            <Route path="/aboutme" exact component={AboutScreen} />
            <Route path="/contactme" exact component={ContactScreen} />
            <Route path="/cv" exact component={CvScreen} />

        </Switch>
    </div>
);

export default RouteComponemt;

