"use strict";
// Lib Modules

// App Modules
import HomeView from "views/home/views.home";

class Router extends Backbone.Router {
    constructor() {
        super();
        this._bindRoutes();
    }

    // Properties
    get view_port() {
        return document.getElementById("ViewPort");
    }

    get routes() {
        return {
            "": "home"
        };
    }

    // Private Methods
    __change_view(view, container, params) {
        // Keep the view change in a common function to add transitions, logging, etc.
        new view({el: container}, params);
        console.log("Router#changeView was called!");
    }

    // Router Actions
    home() {
        this.__change_view(HomeView, this.view_port, null);
    }
}

export default Router;