export default {
    setTasks(state, tasks) {
        state.tasks = tasks.map( task => {
            console.log('color: ', task.fields.status.statusCategory.colorName);
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
