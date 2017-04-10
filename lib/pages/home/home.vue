<style lang="scss" scoped>

</style>

<template>
    <div> Home Page
        <ul>
            <li>{{ url }}</li>
            <li>{{ username }}</li>
            <li>{{ password }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('settings', {
            url: state => state.url,
            username: state => state.username,
            password: state => state.password,
        }),
    },
};
</script>
