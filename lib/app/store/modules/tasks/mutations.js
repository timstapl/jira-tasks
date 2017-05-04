export default {
    setTasks(state, tasks) {
        state.tasks = tasks.map( task => {
            console.log('mapping task: ', task);
            return {
                id: task.id,
                key: task.key,
                self: task.self,
                description: task.fields.description,
                summary: task.fields.summary,
                icon: task.fields.issuetype.iconUrl,
            }
        });
    }
};
