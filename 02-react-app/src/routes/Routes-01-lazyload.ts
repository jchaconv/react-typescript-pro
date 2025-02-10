import { JSX, lazy, LazyExoticComponent } from "react";
import LazyPage3 from "../01-lazyload/pages/LazyPage3.tsx";
import { NoLazy } from "../01-lazyload/pages/NoLazy.tsx";
/*import LazyPage4 from "../01-lazyload/pages/LazyPage4.tsx";
import LazyPage5 from "../01-lazyload/pages/LazyPage5.tsx";
import LazyPage6 from "../01-lazyload/pages/LazyPage6.tsx";*/
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string
}


// LazyExoticComponent<() => JSX.Element> -> es el tipo de estos lazy
// se está reemplazando () => JSX.Element por el type JSXComponent y esto
// me sirve para manejar rutas lazy(Lazy1 y 2) y estáticas(Lazy3)


// por otro lado no vale la pena cambiar el nombre de los chunks porque vite ya los trae
// nombrados por default, si se quiere hacer eso se tiene que agregar una config especial en vite.config.ts
// el ejemplo con webpack es este:
// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1chunksmodified" */'../01-lazyload/pages/LazyPage1.tsx'));

const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1.tsx'));
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2.tsx'));
//const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout.tsx'));
/*const Lazy4 = lazy(() => import('../01-lazyload/pages/LazyPage4.tsx'));
const Lazy5 = lazy(() => import('../01-lazyload/pages/LazyPage5.tsx'));
const Lazy6 = lazy(() => import('../01-lazyload/pages/LazyPage6.tsx'));
*/

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: LazyPage3,
        name: 'Lazy-3'
    },
    {
        to: '/lazyload/',
        //esto es para que todo lo que pase por aquí sea parte del módulo:
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy-Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    /*{
        to: '/lazy4',
        path: 'lazy4',
        Component: LazyPage4,
        name: 'Lazy-4'
    },
    {
        to: '/lazy5',
        path: 'lazy5',
        Component: LazyPage5,
        name: 'Lazy-5'
    },
    {
        to: '/lazy6',
        path: 'lazy6',
        Component: LazyPage6,
        name: 'Lazy-6'
    }*/
];