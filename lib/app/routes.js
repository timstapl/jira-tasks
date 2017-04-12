import TaskComponent from 'pages/tasks/tasks';
import SettingsComponent from 'pages/settings/settings';

export default {
    //
    // Routes
    //
    routes: [
        //
        // Default redirect
        //
        {
            path: '/',
            redirect: '/tasks',
        },
        //
        // Home
        //
        {
            path: '/tasks',
            component: TaskComponent,
        },
        //
        // About
        //
        {
            path: '/settings',
            component: SettingsComponent,
        },
    ],
};
