import * as Repository from './repository';

export default {
    initialize({ rootState }) {
        console.log('yolo: ', rootState);
        Repository.fetchAllTasksForUser(rootState.settings.username, rootState.settings.password, rootState.settings.url);
    }
};
