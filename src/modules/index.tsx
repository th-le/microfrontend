import React from 'react';
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

const getAppRoutes = (): DynamicRoute[] => [
    {path: '/myModule', component: getLazyComponent(LazyMainComponent)}
]

window['routes'] = getAppRoutes();