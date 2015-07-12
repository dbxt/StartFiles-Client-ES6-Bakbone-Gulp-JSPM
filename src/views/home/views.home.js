"use strict";
// Libs
import $ from "jquery";

// App Modules
import PeopleCollection from "../../data/person/data.person.collection";

class HomeView extends Backbone.View {
    initialize () {
        this.template = $("script[name='home']").html();
        let people_collection = new PeopleCollection();
        people_collection.fetch();
        console.log(people_collection);
        this.render(people_collection);
    }

    render (people_collection) {
        this.$el.html("<b>Welcome Home!</b>");
        return this;
    }
}

export default HomeView;