export default [
    {
        path: 'form',
        loadComponent: () => import('./form/form.component').then(m => m.FormComponent),
    }
]