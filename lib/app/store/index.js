import Vuex from 'vuex';

const debug = atom.inDevMode();

const store = new Vuex.Store({
    modules: {

    },
    strict: debug,
});

module.exports = store;
