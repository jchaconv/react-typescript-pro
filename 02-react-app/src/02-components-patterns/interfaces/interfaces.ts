import { CSSProperties, JSX, ReactElement } from "react";

import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
}

export interface OnChangeArgs {
    product: Product;
    count: number;
}


export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product
}


export interface ProductCardHOCProps {

    ({ product, children }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;

}

export interface ProductInCart extends Product {
    count: number;
}