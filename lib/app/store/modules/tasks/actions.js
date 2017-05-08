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

    transitionTask({ commit, dispatch, rootState }, { task, transition }) {
        Repository.executeTaskTransisiton(rootState.settings.username, rootState.settings.password, rootState.settings.url, task.key, transition)
        .then( response => {
            dispatch('updateTask', task);
        });
    },

    updateTask({ commit, rootState }, task) {
        console.log('need to update this task:', task.key);
        Repository.fetchTask(rootState.settings.username, rootState.settings.password, rootState.settings.url, task.key)
        .then( response => {
            commit('updateTask', response.data);
        });
    },
};
