export default [
    {
        path: '',
        loadComponent: () => import('./form/form.component').then(m => m.FormComponent),
    }
]