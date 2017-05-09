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
    height: 200px;
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
    height: 25px;
    margin-top: 10px;

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
    height: 25px;
    margin-bottom: 10px;

    .task-status {
        min-width: 100px;
        max-width: 100px;
        margin-left: 15px;
        border-width: 2px;
        border-style: solid;
        border-radius: 10px;
        cursor: pointer;

        .status-name {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
    }


    .task-transition.yellow,
    .task-status.yellow {
        background-color: #FFD351;
        border-color: #FFD351;
        color: #594300;
    }

    .task-transition.blue-gray,
    .task-status.blue-gray {
        background-color: #4A6785;
        border-color: #4A6785;
        color: #FFF;
    }

    .task-transition.green,
    .task-status.green {
        background-color: #14892C;
        border-color: #14892C;
        color: #FFF;
    }

    .task-transitions {
        position: relative;
        display: absolute;
        width: 100%;
        background-color: rgba(0,0,0,.5);
        border-width: 1px;
        margin: 0px;
        padding: 0px;
        z-index: 256;
    }

    .task-transition {
        width: 100%;
        margin-left: 2px;
        margin-right: 2px;
        margin-top: 5px;
        margin-bottom: 5px;
        border-width: 2px;
        border-style: solid;
        border-radius: 10px;
        cursor: pointer;

        .transition-name {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
    }
}

.task-expanded {
    height: 200px;
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
            <div class="task-status" @mouseenter="toggleTransitions(task)" @mouseleave="toggleTransitions(task)" :class="task.status.statusCategory.colorName">
                <div class="status-name">{{ task.status.name }}</div>
                <div class="task-transitions" v-if="showingTransitions">
                    <div class="transitions">
                        <div
                        class="task-transition"
                        :class="transition.to.statusCategory.colorName"
                        @click="executeTransition(transition, task)"
                        v-for="transition in task.transitions"
                        key="transition.id">
                        <div class="transition-name">{{ transition.name}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <transition name="slide" mode="out-in">
            <div class="task-expanded" v-if="task.isExpanded">
                <hr />
                <div class="description">
                    {{ task.description }}
                </div>
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
            showingTransitions: false,
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
        toggleExpand(task) {
            this.$store.dispatch('tasks/getTaskTransitions', task).then(() => {
                this.$store.commit('tasks/toggleExpanded', task);
            });
        },
        executeTransition(transition, task) {
            this.$store.dispatch('tasks/transitionTask', { task, transition});
        },
        toggleTransitions(task) {
            if (!task.transitions) {
                this.$store.dispatch('tasks/getTaskTransitions', task).then(() => {
                    this.showingTransitions = !this.showingTransitions;
                });
            } else {
                this.showingTransitions = !this.showingTransitions;
            }
        }
    },
}
</script>
