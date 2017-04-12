import Vuex from 'vuex';
import settings from './modules/settings';
import tasks from './modules/tasks';

const debug = atom.inDevMode();

const store = new Vuex.Store({
    modules: {
        settings,
        tasks,
    },
    strict: debug,
});

module.exports = store;
