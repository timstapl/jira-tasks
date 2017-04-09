// Main.js

// can I import vue?
import Vue from 'vue';
import testView from './components/test.vue';

module.exports = {
    jiraTasksView: null,

    activate(state) {
        this.jiraTasksView = new Vue(testView);

        atom.commands.add("atom-workspace", {
            "jira-tasks:toggle-view": () => {
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

    config: {
        username: { default: 'username', type: 'string' },
        password: { default: 'guest', type: 'string' },
        jiraUrl: { default: 'jirainstance.atlassian.net', type: 'string' },
    },
};
