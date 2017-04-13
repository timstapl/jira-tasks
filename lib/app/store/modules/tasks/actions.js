import * as Repository from './repository';

export default {
    initialize({ commit, rootState }) {
        Repository.fetchAllTasksForUser(rootState.settings.username, rootState.settings.password, rootState.settings.url)
        .then( response => {
            commit('setTasks', response.data.issues);
        });
    }
};
