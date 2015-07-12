"use strict";

// Libs
import Backbone from "backbone";

class Person extends Backbone.Model {
    constructor(params){
        super(params);
        if(params) {
            if (params.hasOwnProperty("first_name")) {
                this._first_name = params.first_name;
            }
            if (params.hasOwnProperty("last_name")) {
                this._last_name = params.last_name;
            }
        }
    }

    get first_name() {
        return this._first_name;
    }
    set first_name(value) {
        this._first_name = value;
    }

    get last_name() {
        return this._last_name;
    }
    set last_name(value) {
        this._last_name = value;
    }

    get full_name() {
        return this._last_name + ", " + this._first_name;
    }

    get active() {
        return this._active;
    }
    set active(value) {
        this._active = value;
    }
}

export default Person;