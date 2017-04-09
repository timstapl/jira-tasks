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
        let realActivate = () =>  {
            this.app = new Vue(RootComponent);

            atom.commands.add("atom-workspace", {
                "jira-tasks:toggle-view": () => {
                    this.app.toggle();
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
        if (this.app) {
            if (this.app.$destroy) {
                this.app.$destroy();
            }
        }
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

    consumeAutoReload(reloader) {
        reloader({ pkg: 'jira-tasks', files: "dist/package.js", folders: ["dist/"] })
    },
};
