import { Routes } from '@angular/router';

export const routes: Routes = [
    
    { 
        path: 'auth', 
        loadChildren: () => import('./auth/auth.routes')
    },
    {
        path: 'pages', 
        loadChildren: () => import('./components/components.routes')
    }
];
