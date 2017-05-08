export default {
    setTasks(state, tasks) {
        state.tasks = tasks.map( task => {
            return {
                id: task.id,
                key: task.key,
                self: task.self,
                description: task.fields.description,
                summary: task.fields.summary,
                icon: task.fields.issuetype.iconUrl,
                isExpanded: false,
                status: task.fields.status,
            }
        });
    },

    updateTask(state, freshTask) {
        let index;
        state.tasks.forEach((task, i) => {
            if (task.id === freshTask.id) {
                index = i;
            }
        });

        if (typeof index != 'undefined') {
            // Reset all initial properties of the task.
            // I know most of these are unlikely to change, but seems better safe
            // than sorry sense we already refetched all of it.
            state.tasks[index].id = freshTask.id;
            state.tasks[index].key = freshTask.key;
            state.tasks[index].self = freshTask.self;
            state.tasks[index].description = freshTask.fields.description;
            state.tasks[index].summary = freshTask.fields.summary;
            state.tasks[index].status = freshTask.fields.status;
            state.tasks[index].icon = freshTask.fields.issuetype.iconUrl;
        }
    },

    setTaskTransitions(state, { task: target, transitions }) {
        state.tasks.forEach( task => {
            if (task.id === target.id) {
                task.transitions = transitions;
            }
        });
    },

    toggleExpanded(state, { id }) {
        state.tasks.forEach(task => {
            if(task.id === id) {
                task.isExpanded = !task.isExpanded;
            }
        });
    },
};
