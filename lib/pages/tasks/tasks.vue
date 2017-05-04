<style lang="scss" scoped>
    .tasks-view {
        width: 100%;
        height: 450px;
        min-height: 450px;
        max-height: 240px;
    }
    .task-header {
        width: 100%;
        height: 50px;
        min-height: 50px;
        max-height: 50px;
    }
    .task-list {
        width: 100%;
        height: 400px;
        max-height: 400px;
        overflow-x: hidden;
        overflow-y: scroll;
    }
</style>

<template>
    <div class="tasks-view">
        <div class="task-header">
            {{ count }} tasks
        </div>
        <div class="task-list">
            <v-task v-for="task in tasks" key="task.id" :task="task"></v-task>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    created() {
        this.$store.dispatch('tasks/initialize');
    },
    components: {
        'v-task': require('./task/task'),
    },
    computed: {
        ...mapState('tasks', {
            tasks: state => state.tasks,
        }),

        count() {
            return this.tasks.length;
        }
    },
}
</script>
