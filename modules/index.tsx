import React from 'react';
import { reducer } from './store';

declare global {
    interface Window { modules: any }
}

const LazyMainComponent = React.lazy(() =>  import('./Main'));

const getLazyComponent = (LazyComponent: any) => {
    const WrappedComponent: React.FC = () => {
        return <React.Suspense fallback={<div>Loading</div>}>
            <LazyComponent />
        </React.Suspense>
    }
    return WrappedComponent;
}

interface DynamicRoute {
    path: string;
    component: React.ComponentType<any>;
  }

export const getAppRoutes = (): DynamicRoute[] => [
    {path: '/myModule', component: getLazyComponent(LazyMainComponent)}
]

if(!window.modules) {
    window.modules = {};
}

window.modules.myModule =  {
    routes: getAppRoutes(),
    reducer: reducer,
};