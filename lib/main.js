// Main.js

// will log on initial package eval
console.log("wat");

// can I import vue?
import Vue from 'vue';
import testView from './components/test.vue';

module.exports = {
    jiraTasksView: null,

    activate(state) {
        console.log("activate: ", state);

        this.jiraTasksView = new Vue(testView);

        atom.commands.add("atom-workspace", {
            "jira-tasks:toggle-view": () => {
                console.log("need to toggle view");
                this.jiraTasksView.toggle();
            },
        });
    },

    deactivate() {
        this.jiraTasksView.destroy();
    },

    serialize() {
        return {
            isVisible: this.jiraTasksView.$data.isVisible,
        };
    },
};
