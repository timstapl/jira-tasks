<template>
    <div class="jira-tasks-view">
        hello {{ databinding }}
        <br />
        <input class="native-key-bindings" tabindex="-1" v-model="databinding" />
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
            databinding: "",
        };
    },
    methods: {
        toggle() {
            this.isVisible = !this.isVisible;
        },
        test() {
            console.log("you stopped typing");
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
