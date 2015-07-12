"use strict";

// Libs
import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";

// App Modules
import Router from "./router";

// Start on DOM Ready
$(() => {
    new Router();
    Backbone.history.start();
});