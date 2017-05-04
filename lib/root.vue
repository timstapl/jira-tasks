<style lang="scss">
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
}

.fade-enter, .fade-leave-active {
    opacity: 0;
}
</style>

<style lang="scss" scoped>
.jira-tasks-panel {
    width: 500px;
    height: 500px;
    max-height: 500px;
    overflow: scroll;
}

.close {
    cursor: pointer;
    align-self: flex-end;
}
</style>

<template>
    <div class="v-root">
        <div class="nav">
            <router-link to="/tasks">Tasks</router-link>
            <router-link to="/settings">Settings</router-link>
            <i class="fa close" v-html="close_icon" @click="toggle"></i>
        </div>
        <div class="content">
            <div class="v-router">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
//
// Boot up global utils
//
require('lib/app/boot');

//
// Configure router and store
//
import VueRouter from 'vue-router';
import AppRouter from 'lib/app/routes';
import { sync } from 'vuex-router-sync';
const router = new VueRouter({
    mode: 'history',
    routes: AppRouter.routes,
});

const store = require('lib/app/store');
sync(store, router);

export default {
    router,
    store,
    created() {
        var element = document.createElement('div');
        element.className += 'jira-tasks-panel';
        this.panel = atom.workspace.addModalPanel({
            item: element,
            visible: this.isVisible,
        });
        this.$mount(element);
    },
    mounted() {
        // pull initial settings
        this.$store.dispatch('settings/initialize');

        // setup watchers on settings in case config changes
        atom.config.observe('jira-tasks.username', username => {
            this.$store.commit('settings/setUsername', username);
        });
        atom.config.observe('jira-tasks.password', password => {
            this.$store.commit('settings/setPassword', password);
        });
        atom.config.observe('jira-tasks.jiraUrl', url => {
            this.$store.commit('settings/setUrl', url);
        });
    },
    data() {
        return {
            isVisible: false,
            close_icon: '&#xf00d;',
        };
    },
    methods: {
        toggle() {
            this.isVisible = !this.isVisible;
        },
    },
    watch: {
        isVisible() {
            this.isVisible ?
                this.panel.show() :
                this.panel.hide() ;
        },
    },
};
</script>
