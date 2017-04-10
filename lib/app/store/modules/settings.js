export default {
    namespaced: true,
    state: {
        url: '',
        username: '',
        password: '',
    },
    mutations: {
        setUrl(state, url) {
            state.url = url;
        },
        setUsername(state, username) {
            state.username = username;
        },
        setPassword(state, password) {
            state.password = password;
        },
    },
    actions: {
        initialize({ commit }) {
            commit('setUrl', atom.config.get("jira-tasks.jiraUrl"));
            commit('setUsername', atom.config.get("jira-tasks.username"));
            commit('setPassword', atom.config.get("jira-tasks.password"));
        },
    },
};
