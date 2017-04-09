import HomeComponent from 'pages/home/home';
import AboutComponent from 'pages/about/about';

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
            path: '/about',
            component: AboutComponent,
        },
    ],
};
