<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 250ms;
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
    height: 0px;
}

.slide-enter-to,
.slide-leave {
    height: 50px;
    opacity: 100;
}

.task {
    display: block;
    width: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 3px;
    margin-bottom: 15px;
}

.task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .icon {
        margin-left: 15px;
        min-width: 15px;
        max-width: 15px;
    }

    .key {
        margin-left: 15px;
        min-width: 75px;
        max-width: 75px;
    }

    .summary {
        margin-left: 15px;
        min-width: 400px;
        max-width: 400px;
        text-overflow: ellipsis;
    }

    .expand {
        margin-right: 15px;
        cursor: pointer;
        align-self: flex-end;
        min-width: 15px;
        max-width: 15px;
    }
}

.task-meta {
    display: flex;

}
</style>

<template>
    <div class="task">
        <div class="task-header">
            <img class="icon" :src="task.icon" />
            <div class="key">{{ task.key }}</div>
            <div class="summary" v-if="task.isExpanded">{{ task.summary }}</div>
            <div class="summary" v-else>{{ truncatedSummary }}</div>
            <i v-if="task.isExpanded" class="fa expand" v-html="chevron_up_icon" @click="toggleExpand(task)"></i>
            <i v-else class="fa expand" v-html="chevron_down_icon" @click="toggleExpand(task)"></i>
        </div>
        <div class="task-meta">
        </div>
        <transition name="slide" mode="out-in">
            <div class="task-expanded" v-if="task.isExpanded">
                {{ task.description }}
            </div>
        </transition>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            chevron_down_icon: '&#xf13a;',
            chevron_up_icon: '&#xf139;',
        };
    },
    props: {
        task: { required: true },
    },
    computed: {
        truncatedSummary() {
            let newSummary = this.task.summary;
            if (newSummary.length > 65) {
                newSummary = this.task.summary.substring(0, 62) + '...';
            }
            return newSummary
        },
    },
    methods: {
        ...mapMutations('tasks', {
            toggleExpand: 'toggleExpanded',
        }),
    },
}
</script>
