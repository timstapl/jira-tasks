// Main.js

// can I import vue?
import Vue from 'vue';
import testView from './components/test.vue';

module.exports = {
    jiraTasksView: null,

    activate(state) {
        let realActivate = () =>  {
            this.jiraTasksView = new Vue(testView);

            atom.commands.add("atom-workspace", {
                "jira-tasks:toggle-view": () => {
                    this.jiraTasksView.toggle();
                },
            });
        };

        if (atom.inDevMode()) {
            try {
                realActivate();
            } catch (e) {
                console.log(e);
            }
        } else {
            realActivate();
        }
    },

    deactivate() {
        if (this.jiraTasksView) {
            if (this.jiraTasksView.$destroy) {
                this.jiraTasksView.$destroy();
            }
        }
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

    consumeAutoReload(reloader) {
        reloader({ pkg: 'jira-tasks', files: "dist/package.js", folders: ["dist/"] })
    },
};
