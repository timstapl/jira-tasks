<style lang="scss" scoped>

</style>

<template>
    <div>
        <h1>Current Settings:</h1>
        <ul>
            <li>{{ url }}</li>
            <li>{{ username }}</li>
            <li>{{ password }}</li>
            <li>{{ authString }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Base64 from 'Base64';

export default {
    computed: {
        ...mapState('settings', {
            url: state => state.url,
            username: state => state.username,
            password: state => state.password,
        }),
        authString() {
            return 'Authorization: Basic ' + Base64.btoa(this.username + ':' + this.password);
        },
    },
};
</script>
