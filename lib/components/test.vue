<template>
    <div class="jira-tasks-view">
        hello, {{ databinding }}
        <br />
        <input class="native-key-bindings" tabindex="-1" v-model="databinding" />
    </div>
</template>

<style lang="scss" scoped>
    .jira-tasks-view {
        width: 100%;
        height: 100%;
        border: 2px dashed black;
        color: red;

        input {
            color: blue;
        }
    }
</style>

<script>
export default{
    data() {
        return {
            isVisible: false,
            databinding: "Retrocede",
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
