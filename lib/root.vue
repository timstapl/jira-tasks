<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
}

.fade-enter, .fade-leave-active {
    opacity: 0;
}
</style>

<template>
    <div class="v-root">
        <div class="nav">
            <router-link to="/home">Home</router-link>
            <router-link to="/about">About</router-link>
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
        this.panel = atom.workspace.addModalPanel({
            item: element,
            visible: this.isVisible,
        });
        this.$mount(element);
    },
    data() {
        return {
            isVisible: false,
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
