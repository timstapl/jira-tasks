<style lang="scss" scoped>

</style>

<template>
    <div>
        Tasks will show here
        <ul>
            <li v-for="task in tasks" key="task.id">{{ task.key }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    created() {
        this.$store.dispatch('tasks/initialize');
    },
    computed: {
        ...mapState('tasks', {
            tasks: state => state.tasks,
        }),
    },
}
</script>
