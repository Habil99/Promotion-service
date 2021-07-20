export const baseRoutes = [
    {
        component: () => import('../pages/TaskList'),
        path: '/task-list',
    },
    {
        component: () => import('../pages/News'),
        path: '/news'
    },
    {
        component: () => import('../pages/Profile'),
        path: '/profile'
    }
]