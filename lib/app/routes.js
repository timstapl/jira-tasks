import HomeComponent from 'pages/home/home';
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
            redirect: '/home',
        },
        //
        // Home
        //
        {
            path: '/home',
            component: HomeComponent,
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
