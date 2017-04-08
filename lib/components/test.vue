<template>
    <div class="jira-tasks-view">
        hello world
    </div>
</template>

<style lang="scss" scoped>
    .jira-tasks-view {
        color: red;
    }
</style>

<script>
export default{
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
    created() {
        var element = document.createElement('div');
        this.panel = atom.workspace.addModalPanel({
            item: element,
            visible: this.isVisible,
        });
        this.$mount(element);
    }
};
</script>
