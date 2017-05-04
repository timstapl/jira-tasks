<style lang="scss" scoped>
    .task {
        width: 100%;
        border: 1px solid red;
        border-radius: 3px;
        margin-bottom: 15px;
    }

    .task-header {
        display: flex;
        width: 500px;

        .key {
            width: 150px;
        }

        .description {
            width: 350px;
            text-overflow: ellipsis;
        }
    }
</style>

<template>
    <div class="task">
        <div class="task-header">
            <img :src="task.icon" />
            <div class="key">{{ task.key }}</div>
            <div class="description">{{ task.summary }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        task: { required: true },
    },
}
</script>
