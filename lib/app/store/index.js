import Vuex from 'vuex';
import settings from './modules/settings';

const debug = atom.inDevMode();

const store = new Vuex.Store({
    modules: {
        settings,
    },
    strict: debug,
});

module.exports = store;
