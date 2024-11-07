export default [
    { 
        path: 'login', 
        loadCompoent: () => import('./login.component').then(m => m.LoginComponent) 

    },
]