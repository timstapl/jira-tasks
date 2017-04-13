export default {
    setTasks(state, tasks) {
        console.log('setting tasks: ', tasks);
        state.tasks = tasks.map( task => {
            return {
                id: task.id,
                key: task.key,
                link: task.self,
                assignee: task.assignee,
                reporter: task.reporter,
                created: task.created,
                updated: task.updated,
                description: task.description,
                type: task.issueType,
                priority: task.priority,
                summary: task.summary,
                status: task.status,
            }
        });
    }
};
