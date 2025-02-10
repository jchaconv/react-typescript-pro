import { JSX, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy.tsx";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage.tsx";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string
}


export const routes: Route[] = [
    {
        to: '/shopping',
        path: 'shopping',
        Component: ShoppingPage,
        name: 'Shopping'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
];