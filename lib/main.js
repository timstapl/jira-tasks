//
// Vue deps
//
import Vue from 'vue';
import RootComponent from './root';

// Disable the production warning
if (atom.inDevMode()) {
    Vue.config.productionTip = false;
}

module.exports = {
    app: null,
    jiraTasksView: null,

    activate(state) {
        this.app = new Vue(RootComponent);

        atom.commands.add("atom-workspace", {
            "jira-tasks:toggle-view": () => {
                this.app.toggle();
            },
        });
    },

    deactivate() {
        this.app.$destroy();
    },

    serialize() {
        return {
            isVisible: this.app.$data.isVisible,
        };
    },

    config: {
        username: { default: 'username', type: 'string' },
        password: { default: 'guest', type: 'string' },
        jiraUrl: { default: 'jirainstance.atlassian.net', type: 'string' },
    },
};
