import * as Repository from './repository';

export default {
    initialize({ commit, rootState }) {
        Repository.fetchAllTasksForUser(rootState.settings.username, rootState.settings.password, rootState.settings.url)
        .then( response => {
            commit('setTasks', response.data.issues);
        });
    },

    getTaskTransitions({ commit, rootState }, task) {
        return new Promise((resolve, reject) => {
            Repository.fetchTaskTransitions(rootState.settings.username, rootState.settings.password, rootState.settings.url, task.key)
            .then( response => {
                const transitions = response.data.transitions;
                commit('setTaskTransitions', { task, transitions });
                resolve();
            });
        });
    },

    transitionTask({ commit, rootState }, { task, transition }) {
        Repository.executeTaskTransisiton(rootState.settings.username, rootState.settings.password, rootState.settings.url, task.key, transition)
        .then( response => {
            console.log('did it work? ', response.data);
        });
    },
};
