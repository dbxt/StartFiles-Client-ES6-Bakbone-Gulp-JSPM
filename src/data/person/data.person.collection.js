"use strict";
// App Modules
import Person from "../../data/person/data.person.model";
import LocalStorage from "backbone.localStorage";

class PeopleCollection extends Backbone.Collection {
    constructor(params) {
        super(params);

        this.model = Person;
        // Save to local storage for the sample app.
        this.localStorage = new LocalStorage("sample-app-people");
    }

    active() {
        return this.filter(p => p.get("active"));
    }

    fetch(x) {
        if (!x) x = 10;
        for (let i = 0; i < x; i++) {
            let sample_person = new Person();
            this.push(sample_person);
        }
    }
}

export default PeopleCollection;