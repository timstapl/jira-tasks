<style lang="scss" scoped>

</style>

<template>
    <div>
        Tasks will show here
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('tasks/initialize');
    },
}
</script>
